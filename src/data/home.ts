// Content for the one-page homepage. Facts match src/data/resume.tsx and arXiv.
// Text in [brackets] is a placeholder for the owner to fill in.
// Photos: in `media` and `photos`, replace a caption with an image path such as
// "/photos/iit-mandi/lab.jpg" (file in public/photos/...). Captions show as placeholders.
// Figures in public/projects/ come from github.com/anoushkrit/all-projects; captions follow its READMEs.

export type Figure = { src: string; caption: string };

export type Facet = {
  id: string;
  label: string;
  noun: string;
  cta: string;
  href: string;
  statement: string;
  stats: { value: string; label: string }[];
  media: string[];
  points: string[];
};

export type Paper = {
  id: string;
  slug?: string;
  short: string;
  title: string;
  venue: string;
  org: string;
  blurb: string;
  authors: string[];
  me: number;
  desc: string;
  points: string[];
  links: [string, string][];
  figure?: Figure;
};

export type Project = {
  id: string;
  slug?: string;
  title: string;
  org: string;
  when: string;
  kind: "Software" | "Industry";
  blurb: string;
  desc: string;
  points: string[];
  links: [string, string][];
  figure?: Figure;
};

export type Role = {
  id: string;
  slug: string;
  org: string;
  role: string;
  when: string;
  place: string;
  focus: string;
  summary: string;
  bullets: string[];
  projects: string[];
  photos: string[];
};

// Projects named under a role that have a page but no card in the Projects pane.
export const EXTRA_PROJECT_PAGES: Record<string, string> = {
  ClickVision: "clickvision",
  pyCardiograms: "pycardiograms",
  CADtnet: "cadtnet",
  TableOCR: "table-ocr",
};

export const FACETS: Facet[] = [
  { id: "researcher", label: "Researcher", noun: "researcher", cta: "See publications", href: "#research",
    statement: "I study how models reconstruct, understand and edit 3D structure, from everyday scenes to the human brain.",
    stats: [{ value: "5", label: "papers at ICPR and ISBI" }, { value: "9.47", label: "M.Tech (Research) CGPA, IIT Mandi" }, { value: "1", label: "3D Slicer extension, SlicerTracto" }],
    media: ["/projects/tractoaware-brain.webp", "/projects/tractogpt-results.webp", "/projects/slicertracto-render.webp"],
    points: ["3D reconstruction with point clouds & Gaussian splats", "Editing & generation of 3D representations", "Diffusion MRI tractography & white matter analysis", "Self-supervised & generative pretraining for 3D data"] },
  { id: "entrepreneur", label: "Entrepreneur", noun: "founder", cta: "Read the Tensr.AI story", href: "#experience",
    statement: "I founded Tensr.AI to put a cardiac lab on the chest: a wearable that records ECG and seismocardiograms.",
    stats: [{ value: "3", label: "incubators: SIIC IITK, HTIC IITM, IIT Mandi Catalyst" }, { value: "1", label: "hardware prototype, Teresa Band" }, { value: "2020", label: "founded, as CEO" }],
    media: ["Teresa Band prototype", "The team", "Demo day"],
    points: ["Built the hardware, signal pipeline and beat annotation models", "Released pyCardiograms, an open signal library", "Learned to ship with a small team and a short runway"] },
  { id: "datascientist", label: "Data Scientist", noun: "data scientist", cta: "See industry experience", href: "#experience",
    statement: "Six years shipping models in industry, from mobile ultrasound triage to MLOps for Reliance Jio.",
    stats: [{ value: "4", label: "companies" }, { value: "Lead", label: "Cortex AI team, StatusNeo" }, { value: "Now", label: "Research Engineer, Attentive.AI" }],
    media: ["Attentive.AI", "StatusNeo", "Gamezop"],
    points: ["Vector AI and plan OCR on engineering drawings", "Framework-agnostic model library on ONNX and Protobuf", "Clickstream MDPs for deposit prediction", "On-device breast ultrasound classification"] },
  { id: "artist", label: "Artist", noun: "artist, at times", cta: "See the gallery", href: "",
    statement: "[One line on what you make, and what it gives back to the research.]",
    stats: [{ value: "Minor", label: "in Design, Shiv Nadar University" }, { value: "[n]", label: "[works or series]" }, { value: "[medium]", label: "[your main medium]" }],
    media: ["Artwork 1", "Artwork 2", "Artwork 3"],
    points: ["[A piece or series you are proud of]", "[Where it was shown or shared]", "[What drawing teaches you about 3D form]"] },
  { id: "traveller", label: "Traveller", noun: "traveller, at times", cta: "See travel notes", href: "",
    statement: "[One line on where you go and what you look for when you get there.]",
    stats: [{ value: "[n]", label: "[countries]" }, { value: "[n]", label: "[Indian states]" }, { value: "[place]", label: "[favourite so far]" }],
    media: ["Photo from a trip", "Photo from a trip", "Photo from a trip"],
    points: ["[A trip that changed how you think]", "[A place you want to go next]", "[Something you scanned or reconstructed in 3D on the road]"] }
];

export const PAPERS: Paper[] = [
  { id: "trackletgpt", slug: "trackletgpt", short: "TrackletGPT", venue: "ISBI 2026", org: "IIT Mandi",
    title: "TrackletGPT: A Language-like GPT Framework for White Matter Tract Segmentation",
    blurb: "GPT-style tract segmentation from sub-streamline tokens.",
    authors: ["Goel, A.", "Singh, S.", "Joshi, A.", "Jha, R. R.", "Ahuja, C.", "Nigam, A.", "Bhavsar, A."], me: 0,
    desc: "TrackletGPT splits each streamline into short segments, called tracklets, and treats them as tokens for a GPT model. This puts sequential order back into the representation, so the model segments white matter tracts across subjects and datasets.",
    points: ["Evaluated on TractoInferno and HCP, including cross-dataset tests", "Reported with DICE, overlap and overreach"],
    links: [["arXiv", "https://arxiv.org/abs/2601.13935"]] },
  { id: "tractrlfusion", short: "TractRLFusion", venue: "ISBI 2026", org: "IIT Mandi",
    title: "TractRLFusion: A GPT-Based Multi-Critic Policy Fusion Framework for Fiber Tractography",
    blurb: "Fusing several RL tracking policies with a GPT-based fusion step.",
    authors: ["Joshi, A.", "Sharma, A.", "Goel, A.", "Jha, R. R.", "Ahuja, C.", "Bhavsar, A.", "Nigam, A."], me: 2,
    desc: "A GPT-based framework that fuses multiple reinforcement learning tractography policies, with a two-stage data selection step and multi-critic fine-tuning.",
    points: ["Evaluated on HCP, ISMRM and TractoInferno"],
    links: [["arXiv", "https://arxiv.org/abs/2601.13897"]] },
  { id: "tractogpt", slug: "tractogpt", short: "TractoGPT", venue: "ISBI 2025", org: "IIT Mandi",
    title: "TractoGPT: A GPT architecture for White Matter Segmentation",
    blurb: "GPT architecture for white matter bundle segmentation.",
    authors: ["Goel, A.", "Singh, S.", "Joshi, A.", "Jha, R. R.", "Ahuja, C.", "Nigam, A.", "Bhavsar, A."], me: 0,
    desc: "A GPT-based model trained on streamline, cluster and fusion representations of tractography data, which keeps the shape of white matter bundles and runs fully automatically.",
    points: ["Evaluated on TractoInferno and 105HCP"],
    links: [["arXiv", "https://arxiv.org/abs/2501.15464"]],
    figure: { src: "/projects/tractogpt-overview.webp", caption: "TractoGPT overview: data representations, preprocessing and auto-regressive pretraining." } },
  { id: "tractoembed", slug: "tractoembed", short: "TractoEmbed", venue: "ICPR 2024", org: "IIT Mandi",
    title: "TractoEmbed: A Modular Multi-embedding Framework for White Matter Segmentation",
    blurb: "Multi-level embeddings of streamlines, clusters and patches.",
    authors: ["Goel, A.", "Singh, B.", "Joshi, A.", "Jha, R. R.", "Ahuja, C.", "Nigam, A.", "Bhavsar, A."], me: 0,
    desc: "A modular framework that encodes tractography at three levels (single streamlines, clusters and patches) in separate encoders, then combines the embeddings for tract segmentation.",
    points: ["Published in Springer ICPR 2024 proceedings"],
    links: [["Paper", "https://link.springer.com/chapter/10.1007/978-3-031-78104-9_17"], ["arXiv", "https://arxiv.org/abs/2411.08187"], ["Code", "https://github.com/anoushkrit/TractoEmbed"]],
    figure: { src: "/projects/tractoembed-abstract.webp", caption: "TractoEmbed graphical abstract (ICPR 2024)." } },
  { id: "tract-rlformer", slug: "tract-rlformer", short: "Tract-RLFormer", venue: "ICPR 2024", org: "IIT Mandi",
    title: "Tract-RLFormer: A Tract-Specific RL Policy Based Decoder-Only Transformer Network",
    blurb: "Tract-specific RL policy with a decoder-only transformer.",
    authors: ["Joshi, A.", "Sharma, A.", "Goel, A.", "Jha, R. R.", "Ahuja, C.", "Bhavsar, A.", "Nigam, A."], me: 2,
    desc: "Combines supervised learning and reinforcement learning in a two-stage policy refinement, tracking the tracts of interest directly instead of segmenting afterwards.",
    points: ["Validated on TractoInferno, HCP and ISMRM-2015"],
    links: [["Paper", "https://link.springer.com/chapter/10.1007/978-3-031-78201-5_17"], ["arXiv", "https://arxiv.org/abs/2411.05757"]] }
];

export const PROJECTS: Project[] = [
  { id: "slicertracto", slug: "slicer-tracto", title: "SlicerTracto", org: "IIT Mandi", when: "2024 – now", kind: "Software",
    blurb: "3D Slicer extension for tractography.",
    desc: "An open-source 3D Slicer extension that brings reconstruction, tracking, segmentation and visualisation of white matter tracts into one desktop tool for clinicians.",
    points: ["Runs inside 3D Slicer with DIPY and Scilpy backends", "Optional GPU offloading"], links: [],
    figure: { src: "/projects/slicertracto-quickbundles.webp", caption: "SlicerTracto in 3D Slicer: QuickBundles clustering of a tractogram." } },
  { id: "sculpt3d", slug: "sculpt3d", title: "Sculpt3D", org: "IIT Mandi", when: "2025", kind: "Software",
    blurb: "Text and sketch to 3D point clouds, with region edits.",
    desc: "Generates 3D point clouds from text, sketches or images, then edits chosen regions through natural-language feedback instead of regenerating the whole object.",
    points: ["Built on SDFusion with LLM feedback", "Mentored B.Tech thesis project"], links: [],
    figure: { src: "/projects/sculpt3d-results.webp", caption: "Sculpt3D results on ShapeTalk: point clouds edited from text instructions." } },
  { id: "archglyph", slug: "archglyph-ocr", title: "ArchGlyphOCR", org: "Attentive.AI", when: "2025", kind: "Industry",
    blurb: "Text detection and reading on dense architectural plans.",
    desc: "A text-region proposal and recognition pipeline for large construction drawings, where callouts are small, rotated and packed among linework.",
    points: ["Vector path pretraining from PDF to SVG", "DEIMv2 with a DINOv3 backbone"], links: [] },
  { id: "teresa", slug: "teresa-band", title: "Teresa Band", org: "Tensr.AI", when: "2020 – 21", kind: "Industry",
    blurb: "Wearable for seismocardiogram and ECG signals.",
    desc: "A chest-worn wearable that records seismocardiogram (mechanical heart vibration) alongside ECG, with an LSTM model that annotates fiducial points in each cardiac cycle.",
    points: ["Founded Tensr.AI; incubated at SIIC IIT Kanpur and HTIC IIT Madras"], links: [],
    figure: { src: "/projects/pycardiograms-aortic-peaks.webp", caption: "pyCardiograms: aortic valve opening peaks marked on an SCG recording." } }
];

export const ROLES: Role[] = [
  { id: "attentive", slug: "attentive-ai", org: "Attentive.AI", role: "Research Engineer 2", when: "2025 – now", place: "Gurgaon", focus: "Vector AI and plan OCR",
    summary: "Building models that read architectural and engineering drawings: vector path understanding, symbol detection and text extraction on dense plan sheets.",
    bullets: ["Vector path tokenization (PDF to SVG) as a pretraining objective", "DEIMv2 with a DINOv3 backbone for vector path segmentation", "ArchGlyphOCR for callout and text extraction on plans"],
    projects: ["ArchGlyphOCR"], photos: ["team or office", "whiteboard session", "a plan sheet you worked on"] },
  { id: "iitmandi", slug: "iit-mandi", org: "IIT Mandi", role: "Researcher, M.Tech (Research)", when: "2023 – 2025", place: "Mandi", focus: "3D spatial AI and neuroimaging",
    summary: "M.Tech by Research in Intelligent Systems with Dr. Arnav Bhavsar and Dr. Aditya Nigam, on point cloud and GPT-style models for diffusion MRI tractography.",
    bullets: ["Five papers at ICPR 2024, ISBI 2025 and ISBI 2026", "Built SlicerTracto, a 3D Slicer extension for tractography", "Mentored B.Tech thesis work on 3D generation"],
    projects: ["TrackletGPT", "TractRLFusion", "TractoGPT", "TractoEmbed", "Tract-RLFormer", "SlicerTracto", "Sculpt3D"], photos: ["the lab", "presenting at ISBI or ICPR", "campus"] },
  { id: "statusneo", slug: "statusneo", org: "StatusNeo", role: "Lead Data Scientist", when: "2022 – 2023", place: "Gurgaon", focus: "MLOps for Reliance Jio",
    summary: "Led the Cortex AI team building an MLOps framework for Reliance Jio, with a framework-agnostic model library.",
    bullets: ["Model library built on Protobuf schemas and ONNX", "Mapped scikit-learn and PyTorch models into one schema"],
    projects: [], photos: ["team", "office", "an event"] },
  { id: "gamezop", slug: "gamezop", org: "Gamezop", role: "Senior Data Scientist", when: "2021 – 2022", place: "Gurgaon", focus: "Behavioural RL on clickstreams",
    summary: "Modelled user journeys as Markov decision processes to predict deposits from clickstream data.",
    bullets: ["ClickVision: MDP deposit prediction from clickstream trajectories", "Shipped product changes driven by the model"],
    projects: ["ClickVision"], photos: ["team", "office", "an event"] },
  { id: "tensr", slug: "tensr-ai", org: "Tensr.AI", role: "Founder & CEO", when: "2020 – 2021", place: "Noida", focus: "Cardiac wearables",
    summary: "Founded a startup building a chest-worn wearable that records seismocardiogram and ECG, with models to annotate each heartbeat.",
    bullets: ["Teresa Band hardware prototype", "pyCardiograms signal library", "Incubated at SIIC IIT Kanpur, HTIC IIT Madras and IIT Mandi Catalyst"],
    projects: ["Teresa Band", "pyCardiograms"], photos: ["the prototype", "the team", "a pitch or demo day"] },
  { id: "xtlytics", slug: "xtlytics", org: "xtLytics", role: "Data Scientist", when: "2019 – 2020", place: "Noida", focus: "Medical imaging and OCR",
    summary: "First role after college: breast ultrasound triage on mobile devices and invoice table extraction.",
    bullets: ["CADtnet: on-device ultrasound classification and segmentation", "TableOCR: invoice table extraction"],
    projects: ["CADtnet", "TableOCR"], photos: ["team", "office", "the app"] }
];

