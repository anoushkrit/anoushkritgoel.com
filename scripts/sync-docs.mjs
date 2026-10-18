import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const PROJECT_ROOT = process.cwd();
const PUBLIC_DIR = path.join(PROJECT_ROOT, "public");
const PUBLIC_DOCS_DIR = path.join(PUBLIC_DIR, "docs");
const MANIFEST_PATH = path.join(PROJECT_ROOT, "src", "data", "docs-manifest.json");

// Candidate locations for docs
const LOCAL_SIBLING_DOCS = path.resolve(PROJECT_ROOT, "../docs");
const LOCAL_SUBMODULE_DOCS = path.resolve(PROJECT_ROOT, "docs");
const CACHE_REMOTE_DOCS = path.resolve(PROJECT_ROOT, ".cache", "docs");

function findDocsSource() {
  // 1. Check local sibling directory (standard local monorepo/side-by-side workspace)
  if (fs.existsSync(LOCAL_SIBLING_DOCS) && fs.existsSync(path.join(LOCAL_SIBLING_DOCS, "README.md"))) {
    console.log(`[sync-docs] Found local sibling docs repo at: ${LOCAL_SIBLING_DOCS}`);
    return LOCAL_SIBLING_DOCS;
  }

  // 2. Check local submodule or directory
  if (fs.existsSync(LOCAL_SUBMODULE_DOCS) && fs.existsSync(path.join(LOCAL_SUBMODULE_DOCS, "README.md"))) {
    console.log(`[sync-docs] Found submodule docs repo at: ${LOCAL_SUBMODULE_DOCS}`);
    return LOCAL_SUBMODULE_DOCS;
  }

  // 3. Check for remote token to clone/pull via GitHub credentials
  const token = process.env.DOCS_REPO_TOKEN || process.env.GH_DOCS_TOKEN || process.env.GITHUB_TOKEN;
  if (token) {
    console.log(`[sync-docs] Sibling/submodule not found. Fetching private repo using DOCS_REPO_TOKEN...`);
    try {
      fs.mkdirSync(path.dirname(CACHE_REMOTE_DOCS), { recursive: true });
      const repoUrl = `https://x-access-token:${token}@github.com/anoushkrit/docs.git`;
      if (fs.existsSync(CACHE_REMOTE_DOCS)) {
        console.log(`[sync-docs] Updating existing cached docs clone...`);
        execSync(`git -C "${CACHE_REMOTE_DOCS}" pull --ff-only`, { stdio: "inherit" });
      } else {
        console.log(`[sync-docs] Cloning docs repository (shallow)...`);
        execSync(`git clone --depth 1 "${repoUrl}" "${CACHE_REMOTE_DOCS}"`, { stdio: "inherit" });
      }
      return CACHE_REMOTE_DOCS;
    } catch (err) {
      console.error(`[sync-docs] Error fetching remote docs repository:`, err.message);
    }
  }

  // 4. Check if cache already exists from a previous run
  if (fs.existsSync(CACHE_REMOTE_DOCS)) {
    console.log(`[sync-docs] Using cached docs clone at: ${CACHE_REMOTE_DOCS}`);
    return CACHE_REMOTE_DOCS;
  }

  return null;
}

function collectFiles(dir, baseDir = dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of list) {
    if (item.name.startsWith(".")) continue;
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      results = results.concat(collectFiles(fullPath, baseDir));
    } else {
      results.push({
        fullPath,
        relPath: path.relative(baseDir, fullPath).replace(/\\/g, "/"),
        size: fs.statSync(fullPath).size,
        ext: path.extname(item.name).toLowerCase(),
      });
    }
  }
  return results;
}

function sync() {
  console.log(`[sync-docs] Starting docs synchronization...`);
  const docsSource = findDocsSource();

  if (!docsSource) {
    console.warn(
      `[sync-docs] ⚠️ Warning: Could not find 'docs' repository locally (../docs) or remotely via DOCS_REPO_TOKEN.`
    );
    console.warn(
      `[sync-docs] If you are in CI/CD or Cloudflare, ensure DOCS_REPO_TOKEN is set in GitHub Secrets / environment variables.`
    );
    if (fs.existsSync(PUBLIC_DOCS_DIR)) {
      console.log(`[sync-docs] Using existing files in ${PUBLIC_DOCS_DIR}.`);
    }
    return;
  }

  // Ensure target directories exist
  fs.mkdirSync(PUBLIC_DOCS_DIR, { recursive: true });
  fs.mkdirSync(path.dirname(MANIFEST_PATH), { recursive: true });

  const allFiles = collectFiles(docsSource);
  const pdfFiles = allFiles.filter((f) => f.ext === ".pdf");

  console.log(`[sync-docs] Discovered ${pdfFiles.length} PDF(s) in docs repository.`);

  const manifest = {
    syncedAt: new Date().toISOString(),
    source: docsSource === LOCAL_SIBLING_DOCS ? "local-sibling" : "remote-git",
    documents: [],
    aliases: {},
  };

  for (const file of pdfFiles) {
    const targetPath = path.join(PUBLIC_DOCS_DIR, file.relPath);
    fs.mkdirSync(path.dirname(targetPath), { recursive: true });
    fs.copyFileSync(file.fullPath, targetPath);

    const docEntry = {
      path: `/docs/${file.relPath}`,
      name: path.basename(file.relPath),
      relativeToDocs: file.relPath,
      sizeBytes: file.size,
    };
    manifest.documents.push(docEntry);
    console.log(`  ✓ Synced /docs/${file.relPath} (${(file.size / 1024).toFixed(1)} KB)`);
  }

  // Standard aliases for quick top-level referencing:
  // 1. CV: preference for cv/pdfs/anoushkrit-cv.pdf or cv/anoushkrit-cv.pdf
  const cvCandidate =
    pdfFiles.find((f) => f.relPath === "cv/pdfs/anoushkrit-cv.pdf") ||
    pdfFiles.find((f) => f.relPath === "cv/anoushkrit-cv.pdf") ||
    pdfFiles.find((f) => f.relPath.toLowerCase().includes("cv.pdf"));

  if (cvCandidate) {
    const cvDest = path.join(PUBLIC_DIR, "cv.pdf");
    fs.copyFileSync(cvCandidate.fullPath, cvDest);
    manifest.aliases["cv"] = "/cv.pdf";
    console.log(`  ★ Created alias: /cv.pdf -> /docs/${cvCandidate.relPath}`);
  }

  // 2. Resume: preference for resume/industry-resume.pdf or resume/pdfs/industry-resume.pdf
  const resumeCandidate =
    pdfFiles.find((f) => f.relPath === "resume/industry-resume.pdf") ||
    pdfFiles.find((f) => f.relPath === "resume/pdfs/industry-resume.pdf") ||
    pdfFiles.find((f) => f.relPath === "resume/pdfs/resume.pdf") ||
    pdfFiles.find((f) => f.relPath.toLowerCase().includes("resume.pdf"));

  if (resumeCandidate) {
    const resumeDest = path.join(PUBLIC_DIR, "resume.pdf");
    fs.copyFileSync(resumeCandidate.fullPath, resumeDest);
    manifest.aliases["resume"] = "/resume.pdf";
    console.log(`  ★ Created alias: /resume.pdf -> /docs/${resumeCandidate.relPath}`);
  }

  // Write manifest
  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2), "utf-8");
  console.log(`[sync-docs] Manifest written to ${path.relative(PROJECT_ROOT, MANIFEST_PATH)}`);
  console.log(`[sync-docs] Finished syncing docs successfully! ✨\n`);
}

sync();
