import { NextRequest, NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const resolvedParams = await params;
  const docPath = resolvedParams.path.join("/");

  // Prevent path traversal
  if (docPath.includes("..")) {
    return new NextResponse("Invalid document path", { status: 400 });
  }

  // 1. Try local static synced file first
  const localFilePath = path.join(process.cwd(), "public", "docs", docPath);
  if (fs.existsSync(localFilePath)) {
    const fileBuffer = fs.readFileSync(localFilePath);
    const contentType = docPath.endsWith(".pdf")
      ? "application/pdf"
      : docPath.endsWith(".md")
      ? "text/markdown; charset=utf-8"
      : "application/octet-stream";

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    });
  }

  // 2. Fetch directly from private GitHub repo if DOCS_REPO_TOKEN is set
  const token =
    process.env.DOCS_REPO_TOKEN ||
    process.env.GH_DOCS_TOKEN ||
    process.env.GITHUB_TOKEN;

  if (!token) {
    return new NextResponse("Document not found and no DOCS_REPO_TOKEN configured", {
      status: 404,
    });
  }

  const rawUrl = `https://raw.githubusercontent.com/anoushkrit/docs/main/${docPath}`;

  try {
    const response = await fetch(rawUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github.v3.raw",
      },
    });

    if (!response.ok) {
      return new NextResponse(`GitHub returned ${response.status}: ${response.statusText}`, {
        status: response.status,
      });
    }

    const arrayBuffer = await response.arrayBuffer();
    const contentType =
      response.headers.get("content-type") ||
      (docPath.endsWith(".pdf") ? "application/pdf" : "application/octet-stream");

    return new NextResponse(arrayBuffer, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=300, s-maxage=600",
      },
    });
  } catch (error: any) {
    return new NextResponse(`Error fetching document: ${error?.message || "Unknown error"}`, {
      status: 500,
    });
  }
}
