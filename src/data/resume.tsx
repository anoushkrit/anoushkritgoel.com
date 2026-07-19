import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export interface ProjectDetail {
  slug: string;
  title: string;
  subtitle: string;
  category: "Paper" | "Software & Tool" | "Startup Product" | "Course Project" | "Employment Project" | "Side Project";
  organization: string;
  orgSlug?: string;
  dates: string;
  technologies: readonly string[];
  image?: string;
  video?: string;
  githubUrl?: string;
  paperUrl?: string;
  arxivUrl?: string;
  bibtex?: string;
  shortDescription: string;
  fullDescription: string;
  highlights: readonly string[];
  results?: string;
}

export interface WorkEntry {
  slug: string;
  company: string;
  href: string;
  badges: readonly string[];
  location: string;
  title: string;
  logoUrl: string;
  start: string;
  end: string;
  description: string;
  bullets: readonly string[];
}

export const DATA = {
  name: "Anoushkrit Goel",
  initials: "AG",
  url: "https://anoushkritgoel.com",
  location: "Mandi / Gurgaon, India",
  locationLink: "https://www.google.com/maps/place/IIT+Mandi",
  description:
    "Applied Scientist | 1x Entrepreneur | Spatial AI (3D & 2D) | Medical AI & Neuroimaging | 7+ Years Experience",
  summary:
    "Applied Scientist, Researcher, and Entrepreneur with 7+ years of experience across 3D Spatial AI, Medical Imaging, Document Layout OCR, and Reinforcement Learning. Founded Tensr.AI (Incubated at SIIC IIT Kanpur, HTIC IIT Madras, IIT Mandi Catalyst). Currently pursuing M.Tech (by Research) at IIT Mandi under Dr. Arnav Bhavsar and Dr. Aditya Nigam, developing SOTA 3D point cloud transformer models for white matter tractography and neuro-radiology extensions.",
  avatarUrl: "/me.png",
  skills: [
    { name: "3D Spatial AI (Point Clouds)", icon: Icons.globe },
    { name: "PyTorch & PyTorch3D", icon: Icons.globe },
    { name: "Medical AI & Neuroimaging", icon: Icons.globe },
    { name: "DEIMv2 & DINOv3", icon: Icons.globe },
    { name: "3D Slicer Extension (SlicerTracto)", icon: Icons.globe },
    { name: "Reinforcement Learning (Gym)", icon: Icons.globe },
    { name: "Document OCR (ArchGlyphOCR)", icon: Icons.globe },
    { name: "Transformers (GPT / BERT)", icon: Icons.globe },
    { name: "Open3D & Fury.gl", icon: Icons.globe },
    { name: "ONNX & Protobuf Schemas", icon: Icons.globe },
    { name: "Python", icon: Icons.globe },
    { name: "C++", icon: Icons.globe },
    { name: "Scikit-Learn", icon: Icons.globe },
    { name: "TFLite Edge Deployment", icon: Icons.globe },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "anoushkrit.work@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/anoushkrit",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/anoushkrit-goel/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Scholar: {
        name: "Google Scholar",
        url: "https://scholar.google.com/citations?user=anoushkritgoel",
        icon: Icons.globe,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/anoushkrit",
        icon: Icons.x,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:anoushkrit.work@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  researchIntro:
    "My research focuses on 3D spatial AI, point cloud sequence modeling, and non-invasive neuroimaging (diffusion MRI white matter tractography), outperforming established benchmarks from Harvard Medical School (TractCloud) and SCIL Canada (FIESTA).",

  work: [
    {
      slug: "attentive-ai",
      company: "Attentive.AI",
      href: "https://attentive.ai/",
      badges: [],
      location: "Gurgaon, IN",
      title: "Research Engineer 2",
      logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=attentive.ai",
      start: "Jun 2025",
      end: "Present",
      description: "Vector AI, Blueprint Layout OCR & Geometry Segmentation",
      bullets: [
        "Architected a vector path tokenization framework (PDF → SVG) as a pretraining objective for zero-shot symbol detection and vector path annotation, increasing SOTA macro-F1 by 7%.",
        "Trained and shipped DEIMv2 (DINOv3 backbone) for multi-class vector path segmentation and geometry dimension estimation, reducing total annotation time (TAT) for HVAC to 35% of original duration.",
        "Designed, built, and deployed ArchGlyphOCR: a dense plan text-region proposal + prediction pipeline outperforming Google DocAI & Gemini 3.1 Pro on callout extraction while eliminating API costs.",
      ],
    },
    {
      slug: "iit-mandi",
      company: "IIT Mandi",
      href: "https://www.iitmandi.ac.in/",
      badges: [],
      location: "Mandi, IN",
      title: "Researcher",
      logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=iitmandi.ac.in",
      start: "Feb 2023",
      end: "Jun 2025",
      description: "3D Spatial AI & Neuroimaging Foundational Models",
      bullets: [
        "Designed foundational models for 3D streamlines using PointGPT style architectures with novel tokenization, dual-masking pretraining, and multi-embedding representation learning for WM tract segmentation.",
        "Built and deployed SlicerTracto, an open-source 3D Slicer extension for brain MRI tractography (reconstruction, tracking, segmentation, visualization); deployed at PGI Chandigarh Hospital.",
        "Published 5 papers at ICPR'24 (TractoEmbed, TractRL-former), ISBI'25 (TractoGPT), and ISBI'26 (TrackletGPT, TractRLFusion), outperforming Harvard Medical School (TractCloud) and SCIL Canada (FIESTA).",
      ],
    },
    {
      slug: "statusneo",
      company: "StatusNeo",
      href: "https://statusneo.com/",
      badges: [],
      location: "Gurgaon, IN",
      title: "Lead Data Scientist",
      logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=statusneo.com",
      start: "Aug 2022",
      end: "Mar 2023",
      description: "TelOS & Cortex MLOps Frameworks for Reliance Jio",
      bullets: [
        "Led the Cortex AI team under Dr. Shailesh Kumar for Reliance Jio's TelOS MLOps ecosystem across multiple verticals.",
        "Built a programming language & framework-agnostic ML library via Protobuf schemas and ONNX serialization.",
        "Mapped comprehensive model ontologies, aligning 6 Scikit-Learn models and PyTorch libraries into a unified cross-framework schema (sklearn ↔ PyTorch ↔ TensorFlow).",
      ],
    },
    {
      slug: "gamezop",
      company: "Gamezop",
      href: "https://www.gamezop.com/",
      badges: [],
      location: "Gurgaon, IN",
      title: "Senior Data Scientist",
      logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=gamezop.com",
      start: "Jun 2021",
      end: "Jun 2022",
      description: "Behavioral Reinforcement Learning & Clickstream Optimization",
      bullets: [
        "Created ClickVision: a Markov Decision Process (MDP) deposit prediction model over large-scale clickstream trajectories using RL transition matrices.",
        "Reduced wasted offers and user churn by 62%, significantly boosting deposit conversion rates.",
        "Shipped downstream UI and product changes based on model trajectory predictions.",
      ],
    },
    {
      slug: "tensr-ai",
      company: "Tensr.AI",
      href: "https://www.tensr.ai/",
      badges: [],
      location: "Noida, IN",
      title: "Founder & CEO",
      logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=tensr.ai",
      start: "Feb 2020",
      end: "Jun 2021",
      description: "Biomedical Signal Processing & Health Wearable Prototyping",
      bullets: [
        "Built pyCardiograms (LSTM-based SCG waveform prediction, wave annotation across ECG/PPG/SCG).",
        "Scaled team to 15 members; DST & DPIIT Government certified startup.",
        "Secured incubation at SIIC IIT Kanpur, HTIC IIT Madras, and IIT Mandi Catalyst; ranked #3 at Himalayan Startup Trek 2019.",
        "Designed and prototyped Teresa Band, a proprietary health wearable capturing mechanical heart vibrations.",
      ],
    },
    {
      slug: "xtlytics",
      company: "xtLytics LLC",
      href: "#",
      badges: [],
      location: "Noida, IN",
      title: "Data Scientist",
      logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=xtlytics.com",
      start: "Jan 2019",
      end: "Jan 2020",
      description: "Medical Image Triage & Invoice OCR",
      bullets: [
        "Invoice OCR: Built GCP Vision + Tesseract + Faster-RCNN pipeline to extract and structure tabular content into CSV/XLSX via geometric bounding box heuristics.",
        "CADtnet: Developed edge TFLite model (VGG-19, MobileNet, ResNet) for mobile breast cancer triage on ultrasound images, deployed in LMICs.",
      ],
    },
  ] as readonly WorkEntry[],

  education: [
    {
      school: "Indian Institute of Technology Mandi",
      href: "https://www.iitmandi.ac.in/",
      degree: "M.Tech(R) Intelligent Systems (9.47/10 GPA)",
      logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=iitmandi.ac.in",
      start: "Feb 2023",
      end: "Nov 2025",
    },
    {
      school: "Shiv Nadar University",
      href: "https://snu.edu.in/",
      degree:
        "B.Tech Electronics Engineering | Minor: Design (7.61/10 GPA)",
      logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=snu.edu.in",
      start: "Jul 2015",
      end: "May 2019",
    },
  ],

  // Primary Papers displayed on Homepage
  projects: [
    {
      title: "TrackletGPT",
      href: "/projects/trackletgpt",
      dates: "ISBI 2026",
      active: true,
      description:
        "Accepted at IEEE ISBI 2026 (London, UK): **TrackletGPT: A GPT architecture for White Matter Segmentation** (Rank A). B-Spline sub-segment tokenization for 3D point clouds.",
      technologies: ["3D Spatial AI", "B-Spline Tokenization", "GPT Transformers", "PyTorch3D"],
      bibtex: `@inproceedings{goel2026trackletgpt,
  title={TrackletGPT: A GPT architecture for White Matter Segmentation},
  author={Goel, Anoushkrit and Nigam, Aditya and Bhavsar, Arnav},
  booktitle={IEEE International Symposium on Biomedical Imaging (ISBI)},
  year={2026}
}`,
      links: [
        {
          type: "Details",
          href: "/projects/trackletgpt",
          icon: <Icons.globe className="h-4 w-4" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/anoushkrit/TrackletGPT",
          icon: <Icons.github className="h-4 w-4" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "TractRLFusion",
      href: "/projects/tractrlfusion",
      dates: "ISBI 2026",
      active: true,
      description:
        "Accepted at IEEE ISBI 2026 (London, UK): **TractRLFusion**. Reinforcement Learning policy fusion networks for Diffusion MRI tractography.",
      technologies: ["Reinforcement Learning", "Fusion Networks", "Diffusion MRI", "PyTorch"],
      bibtex: `@inproceedings{goel2026tractrlfusion,
  title={TractRLFusion: Reinforcement Learning and Fusion Networks for Diffusion MRI},
  author={Goel, Anoushkrit and Nigam, Aditya and Bhavsar, Arnav},
  booktitle={IEEE International Symposium on Biomedical Imaging (ISBI)},
  year={2026}
}`,
      links: [
        {
          type: "Details",
          href: "/projects/tractrlfusion",
          icon: <Icons.globe className="h-4 w-4" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "TractoGPT",
      href: "/projects/tractogpt",
      dates: "ISBI 2025",
      active: true,
      description:
        "Accepted at ISBI 2025 (Houston, TX): **TractoGPT**. Dual-masked point cloud GPT model. **Outperformed SCIL Canada's FIESTA benchmark**.",
      technologies: ["3D Spatial AI", "Dual-Masked Pretraining", "GPT Transformers", "SCIL Benchmark"],
      bibtex: `@article{goel2024tractogpt,
  title={TractoGPT: A GPT architecture for White Matter Segmentation},
  author={Goel, Anoushkrit and Nigam, Aditya and Bhavsar, Arnav},
  journal={arXiv preprint arXiv:2411.08187},
  year={2024}
}`,
      links: [
        {
          type: "Details",
          href: "/projects/tractogpt",
          icon: <Icons.globe className="h-4 w-4" />,
        },
        {
          type: "ArXiv",
          href: "https://arxiv.org/abs/2411.08187",
          icon: <Icons.globe className="h-4 w-4" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/anoushkrit/TractoGPT",
          icon: <Icons.github className="h-4 w-4" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "TractoEmbed",
      href: "/projects/tractoembed",
      dates: "ICPR 2024",
      active: true,
      description:
        "Accepted at 27th ICPR 2024 (Kolkata): **TractoEmbed**. Modular multi-embedding CNN/dVAE/PointNet framework. **Outperformed Harvard Medical School's TractCloud**.",
      technologies: ["Representation Learning", "PointNet / dVAE", "Harvard Benchmark", "Neuroimaging"],
      bibtex: `@inproceedings{goel2024tractoembed,
  title={TractoEmbed: A Modular Multi-embedding Framework for White Matter Segmentation},
  author={Goel, Anoushkrit and Nigam, Aditya and Bhavsar, Arnav},
  booktitle={International Conference on Pattern Recognition},
  pages={262--278},
  year={2024},
  organization={Springer}
}`,
      links: [
        {
          type: "Details",
          href: "/projects/tractoembed",
          icon: <Icons.globe className="h-4 w-4" />,
        },
        {
          type: "Paper",
          href: "https://link.springer.com/chapter/10.1007/978-3-031-78104-9_17",
          icon: <Icons.globe className="h-4 w-4" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/anoushkrit/TractoEmbed",
          icon: <Icons.github className="h-4 w-4" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Tract-RLformer",
      href: "/projects/tract-rlformer",
      dates: "ICPR 2024",
      active: true,
      description:
        "Accepted at 27th ICPR 2024: **Tract-RLformer**. Supervised + RL 2-stage policy refinement. **Outperformed SCIL Canada's Track2Learn, DeepTract, and PFT**.",
      technologies: ["Reinforcement Learning", "Decoder Transformers", "SCIL Benchmark", "PyTorch"],
      bibtex: `@inproceedings{goel2024tract,
  title={Tract-RLFormer: A Tract-Specific RL Policy Based Decoder-Only Transformer Network},
  author={Goel, Anoushkrit and Nigam, Aditya and Bhavsar, Arnav},
  booktitle={International Conference on Pattern Recognition},
  pages={279--295},
  year={2024},
  organization={Springer}
}`,
      links: [
        {
          type: "Details",
          href: "/projects/tract-rlformer",
          icon: <Icons.globe className="h-4 w-4" />,
        },
        {
          type: "Paper",
          href: "https://link.springer.com/chapter/10.1007/978-3-031-78201-5_17",
          icon: <Icons.globe className="h-4 w-4" />,
        },
      ],
      image: "",
      video: "",
    },
  ],

  // Primary Open Source Tools displayed on Homepage
  softwareTools: [
    {
      title: "SlicerTracto",
      href: "/projects/slicer-tracto",
      dates: "Dec 2024 - Present",
      description:
        "Open-source 3D Slicer desktop extension enabling Neuro-Radiologists to visualize, track, and segment white matter tracts from Diffusion MRI scans in a standalone GUI app with optional on-prem/cloud GPU compute offloading. Deployed at PGI Chandigarh.",
      technologies: ["3D Slicer", "Medical AI", "Dipy / Scilpy", "PyTorch", "Python"],
      links: [
        {
          type: "Details",
          href: "/projects/slicer-tracto",
          icon: <Icons.globe className="h-4 w-4" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/anoushkrit/SlicerTracto",
          icon: <Icons.github className="h-4 w-4" />,
        },
      ],
    },
    {
      title: "Sculpt3D & Talk2point",
      href: "/projects/sculpt3d",
      dates: "2024 - 2025",
      description:
        "Multimodal Text & Sketch-to-3D point cloud generation and interactive editing framework using SDFusion + LLaMA/GPT continuous feedback loops for granular region-specific 3D spatial manipulation.",
      technologies: ["Multimodal 3D AI", "SDFusion", "LLaMA / GPT", "Open3D", "PyTorch3D"],
      links: [
        {
          type: "Details",
          href: "/projects/sculpt3d",
          icon: <Icons.globe className="h-4 w-4" />,
        },
        {
          type: "Sculpt3D",
          href: "https://github.com/anoushkrit/Sculpt3D",
          icon: <Icons.github className="h-4 w-4" />,
        },
        {
          type: "Talk2point",
          href: "https://github.com/anoushkrit/talk2point",
          icon: <Icons.github className="h-4 w-4" />,
        },
      ],
    },
  ],

  awards: [
    {
      title: "NIDHI-EIR Fellowship Grant",
      issuer: "DST & SIIC IIT Kanpur",
      date: "2021 - 2022",
      description:
        "Awarded National NIDHI Entrepreneur-in-Residence fellowship grant by Department of Science & Technology (DST) government of India, incubated at SIIC IIT Kanpur for Teresa Band biomedical wearable development.",
    },
    {
      title: "HTIC IIT Madras Incubation & GDC Fellowship",
      issuer: "HTIC IIT Madras & GDC Foundation",
      date: "2020 - 2021",
      description:
        "Pre-incubated at Healthcare Technology Innovation Centre (HTIC) IIT Madras; completed Gopalakrishnan Deshpande Foundation customer discovery program with 85+ clinical interviews.",
    },
    {
      title: "IIT Mandi Catalyst Incubation Grant",
      issuer: "IIT Mandi Catalyst",
      date: "2020 - 2021",
      description:
        "Selected for startup incubation and prototype grant support at IIT Mandi Catalyst following the Himalayan Startup Trek.",
    },
    {
      title: "Rank #3 — Himalayan Startup Trek 2019",
      issuer: "IIT Mandi",
      date: "Sep 2019",
      description:
        "Ranked 3rd out of 279 competing startups at Himalayan Startup Trek 2019 for Tensr.AI cardiovascular signal assistant.",
    },
  ],

  certifications: [
    {
      title: "Deep Learning Specialization (5 Courses)",
      issuer: "DeepLearning.AI / Coursera",
      date: "2020",
      credentialId: "N/A",
      url: "https://www.coursera.org/",
    },
    {
      title: "Deep Reinforcement Learning Nanodegree",
      issuer: "Udacity",
      date: "2021",
      credentialId: "N/A",
      url: "https://www.udacity.com/",
    },
    {
      title: "Deep Learning with PyTorch",
      issuer: "Coursera",
      date: "2020",
      credentialId: "N/A",
      url: "https://www.coursera.org/",
    },
  ],

  hackathons: [
    {
      title: "TrackletGPT & TractRLFusion Acceptances",
      dates: "ISBI 2026",
      location: "London, UK",
      description:
        "Two papers accepted at ISBI 2026: TrackletGPT (Rank A) and TractRLFusion, pushing white matter tract segmentation into new reinforcement and transformer paradigms.",
      image: "",
      links: [],
    },
    {
      title: "TractoGPT Accepted at ISBI 2025",
      dates: "Jan 2025",
      location: "Houston, Texas",
      description:
        "Paper accepted at 23rd ISBI 2025: TractoGPT for non-invasive neuroimaging analysis.",
      image: "",
      links: [],
    },
    {
      title: "TractoEmbed & Tract-RLformer Accepted at ICPR 2024",
      dates: "Jul & May 2024",
      location: "Kolkata, India",
      description:
        "Papers accepted at the 27th ICPR: TractoEmbed and Tract-RLformer.",
      image: "",
      links: [],
    },
  ],
} as const;

// Exhaustive Dataset of All 17 Projects for Dynamic Routes
export const ALL_PROJECTS_DETAILS: readonly ProjectDetail[] = [
  {
    slug: "cadtnet",
    title: "CADtnet",
    subtitle: "Edge TFLite Breast Cancer Ultrasound Triage App",
    category: "Employment Project",
    organization: "xtLytics LLC",
    orgSlug: "xtlytics",
    dates: "Jan 2019 - Jan 2020",
    technologies: ["TFLite", "VGG-19", "MobileNet", "ResNet", "U-Net++", "Android", "Python"],
    image: "https://prod-images-static.radiopaedia.org/images/45173030/101e4b11d9d079646ebea213875a48_gallery.jpeg",
    shortDescription:
      "Developed an edge TFLite deep learning model for mobile breast cancer lesion segmentation and classification on ultrasound images (~6,500 scans dataset), deployed in Low-Middle Income Countries (Guadalajara, Mexico).",
    fullDescription:
      "CADtnet is an edge-optimized mobile AI application built to triage breast cancer lesions from ultrasound scans in Low-Middle Income Countries (LMICs) where specialized radiologists are scarce. Leveraging custom lightweight convolutional neural networks (VGG-19, MobileNet, ResNet, U-Net++), the model was quantized into TensorFlow Lite (TFLite) to run real-time inference directly on Android smartphones without requiring active internet connectivity or cloud servers. The system was field-tested and deployed in Guadalajara, Mexico.",
    highlights: [
      "Trained on a curated clinical dataset of ~6,500 ultrasound scans from scratch to deployment.",
      "Achieved sub-second edge inference on mid-range Android mobile devices via 8-bit TFLite quantization.",
      "Field-deployed in Guadalajara, Mexico to support clinical health workers in resource-constrained environments.",
    ],
    results: "Enabled real-time, offline breast lesion screening with high sensitivity across low-resource clinics in LMICs.",
  },
  {
    slug: "table-ocr",
    title: "TableOCR",
    subtitle: "Invoice & Gas Station Bill Table Extraction Pipeline",
    category: "Employment Project",
    organization: "xtLytics LLC",
    orgSlug: "xtlytics",
    dates: "Jan 2019 - Jan 2020",
    technologies: ["GCP Vision API", "Tesseract OCR", "Faster-RCNN", "OpenCV", "Python"],
    image: "https://i0.wp.com/livefiredev.com/wp-content/uploads/2023/04/ocr_table_tool_1_contours.jpg?ssl=1",
    shortDescription:
      "State-of-the-art Invoice & Supermarket Bill OCR using GCP Vision + Tesseract + Faster-RCNN to extract and structure loosely-tabular content into CSV/XLSX via geometric bounding box heuristics for 50+ US gas station clients.",
    fullDescription:
      "TableOCR is an automated document processing pipeline designed to parse unstructured invoices, supermarket receipts, and gas station billing sheets into structured Excel and CSV accounting formats. Combining Google Cloud Vision API, Tesseract OCR, and a custom Faster-RCNN region proposal network, the pipeline detects line items, itemized prices, tax headers, and table contours using geometric bounding box heuristics even on distorted or low-resolution scans.",
    highlights: [
      "Processed high-volume paper invoices across 50+ gas station commercial clients in the US.",
      "Built geometric bounding-box clustering heuristics to group disconnected cells into contiguous data tables.",
      "Reduced manual data entry overhead by over 80% with high table parsing accuracy.",
    ],
    results: "Automated daily financial ledger ingestion for 50+ US commercial clients with near-zero error rates.",
  },
  {
    slug: "cvs-valve",
    title: "CVS-valve",
    subtitle: "Lumped Parameter Cardiovascular Valve Mechanics Modeling",
    category: "Course Project",
    organization: "IIT Mandi",
    orgSlug: "iit-mandi",
    dates: "Feb 2023 - Jun 2023",
    technologies: ["Biomedical Systems (EE516)", "MATLAB", "Simulink", "Lumped Models", "Laplace & Fourier"],
    shortDescription:
      "Biomedical systems modeling of cardiovascular valve mechanics and blood flow dynamics using Lumped Parameter electrical-hydraulic analogies, Laplace transforms, and Fourier analysis under Dr. Erwin Fuhrer.",
    fullDescription:
      "CVS-valve is a biomedical engineering simulation project completed for the Biomedical Systems course (EE516) at IIT Mandi under Dr. Erwin Fuhrer. The project models the human cardiovascular system and aortic valve dynamics using lumped parameter hydraulic-electrical analogies (where blood pressure maps to voltage and flow rate maps to current). Utilizing Laplace transforms, transfer functions, and Fourier series representations, the simulation models valve opening/closure timing, pressure drops, and cardiac output under normal vs pathological stenosis conditions.",
    highlights: [
      "Derived transfer functions for aortic valve pressure-flow relationships using electrical circuit analogies.",
      "Simulated transient pressure waves and dynamic regurgitation in MATLAB & Simulink.",
      "Earned Grade 'A' in EE516 Biomedical Systems under Dr. Erwin Fuhrer.",
    ],
    results: "Accurately reproduced clinical systemic arterial pressure waveforms and stenosis dynamics.",
  },
  {
    slug: "medintel",
    title: "MedIntel",
    subtitle: "Fine-Tuned LLM Triage Chatbot for Differential Diagnosis",
    category: "Course Project",
    organization: "IIT Mandi",
    orgSlug: "iit-mandi",
    githubUrl: "https://github.com/satyam-kr03/MedIntel",
    dates: "Feb 2024 - May 2024",
    technologies: ["MedLLaVA", "Med-LLaMA", "DDx-Plus Dataset", "PyTorch", "HuggingFace", "Python"],
    shortDescription:
      "Clinical chatbot fine-tuned on the DDx-Plus dataset by adapting Microsoft's MedLLaVA and Med-LLaMA to perform multi-turn patient symptom interviewing and automated differential diagnosis.",
    fullDescription:
      "MedIntel is a specialized conversational medical AI system designed to conduct interactive patient symptom intake and suggest differential diagnoses. Built by fine-tuning open-source biomedical large language models (MedLLaVA by Microsoft and Med-LLaMA) on the DDx-Plus clinical dataset, MedIntel asks targeted follow-up questions regarding symptom duration, severity, and risk factors before outputting ranked diagnostic probabilities for clinical review.",
    highlights: [
      "Fine-tuned MedLLaVA & Med-LLaMA parameters using LoRA parameter-efficient adapter training.",
      "Evaluated on 49+ clinical pathology conditions within the synthetic DDx-Plus diagnostic benchmark dataset.",
      "Integrated structured prompt templates ensuring safe clinical disclaimers and transparent diagnostic reasoning.",
    ],
    results: "Achieved top-3 differential diagnosis accuracy matching clinical baseline standards on DDx-Plus.",
  },
  {
    slug: "sculpt3d",
    title: "Sculpt3D",
    subtitle: "Multimodal Text & Sketch-to-3D Point Cloud Interactive Generation",
    category: "Software & Tool",
    organization: "IIT Mandi",
    orgSlug: "iit-mandi",
    githubUrl: "https://github.com/anoushkrit/Sculpt3D",
    dates: "Jan 2025 - Present",
    technologies: ["SDFusion", "LLaMA / GPT", "Open3D", "PyTorch3D", "Plotly", "Fury.gl", "Python"],
    image: "https://mlr.cdn-apple.com/media/fig1_84b4ceb42b.png",
    shortDescription:
      "Multimodal Text & Sketch-to-3D point cloud generation and interactive editing framework using SDFusion + LLaMA/GPT continuous feedback loops for granular region-specific 3D spatial manipulation. Mentored B.Tech thesis project.",
    fullDescription:
      "Sculpt3D is an advanced generative 3D spatial AI project that enables users to synthesize and edit 3D point cloud objects from multimodal inputs (textual descriptions, 2D sketches, and reference images). Building upon Signed Distance Function fusion (SDFusion), Sculpt3D introduces continuous natural language feedback loops powered by LLMs (LLaMA & GPT-4o). Users can iteratively prompt the model to modify localized parts of an existing 3D point cloud (e.g. 'elongate the chair legs' or 'smooth the surface') without regenerating the object from scratch.",
    highlights: [
      "Mentored B.Tech thesis students at IIT Mandi on 3D generative diffusion and spatial point cloud manipulation.",
      "Introduced continuous feedback prompt editing allowing interactive localized 3D point cloud refinement.",
      "Integrated Open3D, PyTorch3D, and Fury.gl for real-time browser-based 3D visualization.",
    ],
    results: "Demonstrated precise region-level 3D point cloud spatial editing guided by natural language prompts.",
  },
  {
    slug: "slicer-tracto",
    title: "SlicerTracto",
    subtitle: "Open-Source 3D Slicer Extension for Neuro-Radiology Tractography",
    category: "Software & Tool",
    organization: "IIT Mandi",
    orgSlug: "iit-mandi",
    githubUrl: "https://github.com/anoushkrit/SlicerTracto",
    dates: "Dec 2024 - Present",
    technologies: ["3D Slicer Extension", "DIPY", "Scilpy", "PyTorch", "Python", "Qt GUI"],
    image: "https://brainsuite.org/wp-content/uploads/2015/02/tracts2.png",
    shortDescription:
      "Open-source 3D Slicer desktop extension enabling Neuro-Radiologists to visualize, track, and segment white matter tracts from Diffusion MRI scans in a standalone GUI app with optional on-prem/cloud GPU compute offloading. Deployed at PGI Chandigarh.",
    fullDescription:
      "SlicerTracto is the culmination of research at IIT Mandi's MANAS Lab into a production-ready open-source 3D Slicer extension. Designed for neuro-radiologists and neurosurgeons, SlicerTracto integrates novel AI foundational models (TractoEmbed, TractoGPT, and TractRL-former) into the familiar 3D Slicer medical software suite. The tool enables clinicians to load Diffusion MRI (dMRI) scans, run fiber tracking algorithms, visualize 3D white matter bundles in real time, and execute accurate anatomical tract segmentation. SlicerTracto supports local execution on consumer workstations as well as background GPU server offloading.",
    highlights: [
      "Cross-platform desktop extension running natively on Windows, macOS, and Linux within 3D Slicer.",
      "Deployed and field-tested in clinical settings at PGI Chandigarh Hospital for neurosurgical planning.",
      "Provides seamless GUI controls for DIPY and Scilpy neuroimaging backends with automated tract filtering.",
    ],
    results: "Bridges state-of-the-art neuroimaging AI models directly into neurosurgical clinical workflows.",
  },
  {
    slug: "talk2point",
    title: "Talk2Point",
    subtitle: "Granular Region-Specific Text-Guided 3D Point Cloud Editing",
    category: "Side Project",
    organization: "Independent Research",
    githubUrl: "https://github.com/anoushkrit/talk2point",
    dates: "Feb 2024 - May 2024",
    technologies: ["ShapeTalk Dataset", "ChangeIt3D", "SDFusion", "Open3D", "PyTorch"],
    shortDescription:
      "Modification in ChangeIt3D tokenization on the ShapeTalk dataset to learn granular patch embeddings for text-guided 3D point cloud reconstruction and region-specific editing.",
    fullDescription:
      "Talk2Point is a side research project exploring fine-grained 3D shape modification guided by natural language comparisons. By extending the ChangeIt3D architecture on the ShapeTalk dataset, Talk2Point replaces global shape tokens with localized 3D point cloud patch embeddings. This allows the network to interpret fine-grained spatial instructions (such as 'make the chair armrests thicker' or 'curve the backrest') and modify only the relevant 3D regions while preserving the rest of the shape geometry.",
    highlights: [
      "Modified ChangeIt3D tokenization to extract multi-scale 3D patch embeddings for localized spatial alignment.",
      "Evaluated text-driven shape editing performance on ShapeTalk benchmark pairs.",
      "Integrated SDFusion backends for zero-shot 3D point cloud reconstruction from text prompts.",
    ],
    results: "Achieved superior region-specific 3D shape editing accuracy compared to baseline global shape models.",
  },
  {
    slug: "trackletgpt",
    title: "TrackletGPT",
    subtitle: "B-Spline Streamline Tokenization for White Matter Segmentation",
    category: "Paper",
    organization: "IIT Mandi",
    orgSlug: "iit-mandi",
    githubUrl: "https://github.com/anoushkrit/TrackletGPT",
    dates: "ISBI 2026",
    technologies: ["3D Spatial AI", "B-Spline Tokenization", "GPT Transformers", "PyTorch3D", "Plotly"],
    bibtex: `@inproceedings{goel2026trackletgpt,
  title={TrackletGPT: A GPT architecture for White Matter Segmentation},
  author={Goel, Anoushkrit and Nigam, Aditya and Bhavsar, Arnav},
  booktitle={IEEE International Symposium on Biomedical Imaging (ISBI)},
  year={2026}
}`,
    shortDescription:
      "Accepted at IEEE International Symposium on Biomedical Imaging (ISBI 2026, London, UK): **TrackletGPT** (Conference Rank: A). Introduces B-Spline streamline sub-segment tokenization for GPT-based 3D point cloud reconstruction and segmentation.",
    fullDescription:
      "TrackletGPT is a peer-reviewed research paper accepted at the IEEE International Symposium on Biomedical Imaging (ISBI 2026, London, UK) with Conference Rank A. Building upon TractoGPT, TrackletGPT introduces a novelty in 3D streamline tokenization: representing fiber tract sub-sequences as continuous B-Spline 'tracklets'. By encoding geometric curvature parameters into discrete tokens, the GPT transformer pretrains on tracklet completion and dual-masking, achieving state-of-the-art white matter tract segmentation accuracy across complex crossing-fiber brain anatomical regions.",
    highlights: [
      "Accepted at IEEE ISBI 2026 (London, UK) with Conference Rank A classification.",
      "Formulated B-Spline continuous curve tokens to preserve spatial streamline trajectory continuity.",
      "Pretrained GPT transformer architecture on dual-masked tracklet reconstruction tasks.",
    ],
    results: "Set new benchmark accuracy for non-invasive white matter tract anatomical segmentation.",
  },
  {
    slug: "tract-rlformer",
    title: "Tract-RLformer",
    subtitle: "Tract-Specific Reinforcement Learning & Transformer Tracking",
    category: "Paper",
    organization: "IIT Mandi",
    orgSlug: "iit-mandi",
    paperUrl: "https://link.springer.com/chapter/10.1007/978-3-031-78201-5_17",
    arxivUrl: "https://arxiv.org/abs/2411.05757",
    dates: "ICPR 2024",
    technologies: ["Reinforcement Learning", "Decoder Transformers", "OpenAI Gym", "Scilpy", "PyTorch"],
    bibtex: `@inproceedings{goel2024tract,
  title={Tract-RLFormer: A Tract-Specific RL Policy Based Decoder-Only Transformer Network},
  author={Goel, Anoushkrit and Nigam, Aditya and Bhavsar, Arnav},
  booktitle={International Conference on Pattern Recognition},
  pages={279--295},
  year={2024},
  organization={Springer}
}`,
    shortDescription:
      "Accepted at 27th ICPR 2024 (Kolkata): **Tract-RLformer**. Supervised + Reinforcement Learning 2-stage policy refinement network that directly delineates white matter tracts, outperforming SCIL Canada benchmarks.",
    fullDescription:
      "Tract-RLformer is a peer-reviewed research paper published at the 27th International Conference on Pattern Recognition (ICPR 2024, Kolkata). The network utilizes a hybrid two-stage training strategy combining supervised pretraining with reinforcement learning policy refinement. By training tract-specific agent policies within an OpenAI Gym environment over dMRI vector fields, Tract-RLformer directly tracks and delineates white matter bundles of interest without requiring post-hoc anatomical filtering. It markedly outperformed established tracking algorithms from Sherbrooke Connectivity Imaging Lab (SCIL Canada) including Track2Learn, DeepTract, and Particle Filtering Tracking (PFT).",
    highlights: [
      "Published in Springer ICPR 2024 conference proceedings.",
      "Outperformed SCIL Canada's benchmark tracking algorithms (Track2Learn, DeepTract, PFT).",
      "Eliminated post-processing segmentation steps by learning direct goal-directed RL fiber tracking policies.",
    ],
    results: "Markedly improved fiber tracking accuracy and cross-dataset generalizability across clinical dMRI scans.",
  },
  {
    slug: "tractoaware",
    title: "TractoAware",
    subtitle: "Preliminary Spatial 3D Point Cloud Streamline Tokenization",
    category: "Course Project",
    organization: "IIT Mandi",
    orgSlug: "iit-mandi",
    dates: "Feb 2023 - Jun 2023",
    technologies: ["3D Spatial AI", "Point Cloud Patching", "DIPY", "PyTorch", "Python"],
    shortDescription:
      "Preliminary research project establishing spatial 3D streamline patch tokenization that laid the foundational groundwork for TractoGPT, TractoEmbed, and TrackletGPT.",
    fullDescription:
      "TractoAware is the foundational preliminary research project conducted at IIT Mandi's MANAS Lab that initiated the lab's line of 3D Spatial AI publications. The project explored how spatial point cloud representations could be extracted from 3D Diffusion MRI streamline sequences. By grouping neighboring streamlines into spatial 3D point cloud patches, TractoAware demonstrated that self-supervised masked pretraining could capture microstructural brain connectivity patterns, directly inspiring the subsequent TractoEmbed, TractoGPT, and TrackletGPT architectures.",
    highlights: [
      "Established initial proof-of-concept for converting dMRI fiber streamlines into spatial 3D point cloud patches.",
      "Proved viability of transformer pretraining over non-Euclidean neuroimaging spatial structures.",
      "Served as the direct foundational predecessor to 5 peer-reviewed conference publications.",
    ],
    results: "Validated 3D point cloud patch representations for brain fiber tract spatial modeling.",
  },
  {
    slug: "tractoembed",
    title: "TractoEmbed",
    subtitle: "Modular Multi-Embedding Framework for White Matter Segmentation",
    category: "Paper",
    organization: "IIT Mandi",
    orgSlug: "iit-mandi",
    githubUrl: "https://github.com/anoushkrit/TractoEmbed",
    paperUrl: "https://link.springer.com/chapter/10.1007/978-3-031-78104-9_17",
    arxivUrl: "https://arxiv.org/abs/2411.08187",
    dates: "ICPR 2024",
    technologies: ["PointNet", "dVAE", "CNN Embeddings", "PyTorch", "Harvard Benchmark"],
    bibtex: `@inproceedings{goel2024tractoembed,
  title={TractoEmbed: A Modular Multi-embedding Framework for White Matter Segmentation},
  author={Goel, Anoushkrit and Nigam, Aditya and Bhavsar, Arnav},
  booktitle={International Conference on Pattern Recognition},
  pages={262--278},
  year={2024},
  organization={Springer}
}`,
    shortDescription:
      "Accepted at 27th ICPR 2024 (Kolkata): **TractoEmbed**. Modular multi-embedding framework using CNN, dVAE, and PointNet. **Outperformed Harvard Medical School's TractCloud benchmark**.",
    fullDescription:
      "TractoEmbed is a peer-reviewed research paper published at the 27th International Conference on Pattern Recognition (ICPR 2024, Kolkata). The paper proposes a modular multi-embedding architecture that extracts representations across three hierarchical levels: individual streamline level (via 1D CNN), regional patch level (via discrete Variational Autoencoder dVAE), and global bundle level (via PointNet). By fusing these multi-scale spatial embeddings, TractoEmbed classifies streamlines into 72 anatomical white matter tracts, outperforming Harvard Medical School's benchmark TractCloud model.",
    highlights: [
      "Published in Springer ICPR 2024 proceedings.",
      "Outperformed Harvard Medical School's TractCloud benchmark on white matter tract segmentation.",
      "Combined 1D CNN, dVAE, and PointNet architectures into a unified hierarchical spatial feature extractor.",
    ],
    results: "Achieved superior F1-score and Dice overlap coefficients on HCP & TRACULA anatomical tract datasets.",
  },
  {
    slug: "tractogpt",
    title: "TractoGPT",
    subtitle: "Dual-Masked GPT Architecture for White Matter Segmentation",
    category: "Paper",
    organization: "IIT Mandi",
    orgSlug: "iit-mandi",
    githubUrl: "https://github.com/anoushkrit/TractoGPT",
    arxivUrl: "https://arxiv.org/abs/2411.08187",
    dates: "ISBI 2025",
    technologies: ["GPT Transformers", "Dual-Masking", "3D Spatial AI", "SCIL Benchmark", "PyTorch"],
    bibtex: `@article{goel2024tractogpt,
  title={TractoGPT: A GPT architecture for White Matter Segmentation},
  author={Goel, Anoushkrit and Nigam, Aditya and Bhavsar, Arnav},
  journal={arXiv preprint arXiv:2411.08187},
  year={2024}
}`,
    shortDescription:
      "Accepted at 23rd ISBI 2025 (Houston, TX): **TractoGPT**. Models tractography streamlines as 3D point cloud patches pretrained via dual-masking. **Outperformed SCIL Canada's FIESTA benchmark**.",
    fullDescription:
      "TractoGPT is a peer-reviewed research paper accepted at the 23rd IEEE International Symposium on Biomedical Imaging (ISBI 2025, Houston, Texas). TractoGPT models 3D tractography streamlines as spatial point cloud tokens. The model introduces a dual-masking self-supervised pretraining objective: masking both individual point coordinates within a patch and whole spatial patches across the brain. Once pretrained on point cloud reconstruction, the decoder-only GPT transformer is fine-tuned for white matter tract classification, outperforming Sherbrooke Connectivity Imaging Lab (SCIL Canada)'s state-of-the-art model, FIESTA.",
    highlights: [
      "Accepted at IEEE ISBI 2025 (Houston, Texas).",
      "Outperformed SCIL Canada's state-of-the-art FIESTA model on anatomical tract segmentation.",
      "Introduced dual-masking self-supervised pretraining tailored specifically for 3D spatial point sequences.",
    ],
    results: "Established state-of-the-art segmentation accuracy across challenging brain fiber crossing regions.",
  },
  {
    slug: "vikram-unity",
    title: "VikramUnity",
    subtitle: "Chandrayaan-3 Vikram Rover Lunar Landing VR Simulation",
    category: "Course Project",
    organization: "IIT Mandi",
    orgSlug: "iit-mandi",
    dates: "Feb 2023 - Jun 2023",
    technologies: ["Mobile VR & AI (CS662)", "Unity 3D Engine", "C#", "Mobile VR", "Rigid Body Physics"],
    shortDescription:
      "Interactive 3D simulation of Chandrayaan-3 Vikram Rover lunar landing and surface traversal built in Unity Engine for mobile VR under Dr. Varun Dutt.",
    fullDescription:
      "VikramUnity is an interactive virtual reality simulation project developed for the Mobile Virtual Reality & Artificial Intelligence course (CS662) at IIT Mandi under Dr. Varun Dutt. The simulation recreates ISRO's Chandrayaan-3 mission, featuring physics-based thruster descent controls for the Vikram lander and autonomous surface obstacle avoidance algorithms for the Pragyan rover. Built in Unity 3D with C# scripts, the application was optimized for smooth 60fps rendering on mobile VR headsets.",
    highlights: [
      "Simulated lunar gravity, thruster dynamics, and terrain collision physics in Unity 3D.",
      "Programmed autonomous rover pathfinding around simulated lunar craters and boulders.",
      "Earned Grade 'A' in CS662 Mobile Virtual Reality and AI under Dr. Varun Dutt.",
    ],
    results: "Delivered an immersive 60fps mobile VR lunar exploration simulation environment.",
  },
  {
    slug: "teresa-band",
    title: "Teresa Band",
    subtitle: "Proprietary Biomedical Heart Health Wearable Product",
    category: "Startup Product",
    organization: "Tensr.AI",
    orgSlug: "tensr-ai",
    dates: "Feb 2020 - Jun 2021",
    technologies: ["SCG Sensors", "ECG Modality", "Analog Electronics", "STM32", "Health Wearables", "DSP"],
    shortDescription:
      "Proprietary health wearable capturing Seismocardiogram (SCG) mechanical heart vibrations and ECG signals for holistic cardiovascular and respiratory triage. Incubated at SIIC IIT Kanpur, HTIC IIT Madras, and IIT Mandi Catalyst.",
    fullDescription:
      "Teresa Band is the flagship hardware wearable product developed by Tensr.AI under Anoushkrit Goel's leadership as Founder & CEO. While conventional smartwatches rely solely on optical photoplethysmography (PPG), Teresa Band incorporates custom analog piezoelectric sensors to record Seismocardiograms (SCG)—measuring micro-mechanical chest wall vibrations induced by cardiac valve closure and blood ejection. Combined with single-lead ECG recording, the device provided non-invasive early triaging for cardiovascular ailments.",
    highlights: [
      "Formulated hardware architecture and analog sensor placement for dual SCG + ECG signal acquisition.",
      "Secured government incubation & fellowship grants from SIIC IIT Kanpur (NIDHI-EIR), HTIC IIT Madras, and IIT Mandi Catalyst.",
      "Ranked 3rd among 279 competing hardware & AI startups at Himalayan Startup Trek 2019.",
    ],
    results: "Successfully built functioning physical hardware prototypes capable of capturing dual SCG + ECG signals.",
  },
  {
    slug: "pycardiograms",
    title: "pyCardiograms",
    subtitle: "Python DSP & LSTM Waveform Prediction Library",
    category: "Startup Product",
    organization: "Tensr.AI",
    orgSlug: "tensr-ai",
    dates: "Feb 2020 - Jun 2021",
    technologies: ["Python", "LSTM Networks", "SciPy DSP", "PyTorch", "ECG / PPG / SCG Annotation"],
    shortDescription:
      "Core Python data science library for Tensr.AI featuring LSTM-based SCG waveform prediction, noise filtering, and automated peak annotation across multi-modal cardiac signals.",
    fullDescription:
      "pyCardiograms is the core Python data science library engineered at Tensr.AI to process raw biomedical time-series data captured by the Teresa Band. The package implements digital signal processing filters (Butterworth bandpass, wavelet denoising) to isolate mechanical cardiac vibrations from motion artifacts. It features a trained LSTM recurrent neural network that automatically annotates AO (Aortic Opening), AC (Aortic Closure), MO (Mitral Opening), and MC (Mitral Closure) fiducial points across SCG, ECG, and PPG waveforms.",
    highlights: [
      "Engineered automated signal denoising pipelines handling baseline wander and muscle motion artifacts.",
      "Trained LSTM models for precise fiducial peak location across multimodal cardiac cycles.",
      "Scaled R&D team to 15 engineers and data scientists at Tensr.AI.",
    ],
    results: "Automated cardiac cycle fiducial point extraction with high clinical timing fidelity.",
  },
  {
    slug: "clickvision",
    title: "ClickVision",
    subtitle: "MDP Clickstream Deposit Prediction & Churn Optimization",
    category: "Employment Project",
    organization: "Gamezop",
    orgSlug: "gamezop",
    dates: "Jun 2021 - Jun 2022",
    technologies: ["Markov Decision Processes (MDP)", "RL Transition Matrices", "Python", "Scikit-Learn", "Clickstream AI"],
    shortDescription:
      "Markov Decision Process (MDP) deposit prediction model over large-scale clickstream trajectories using RL transition matrices, reducing wasted promotional offers and churn by 62%.",
    fullDescription:
      "ClickVision is a behavioral reinforcement learning framework created for Gamezop to predict user deposit conversion from real-time clickstream event trajectories. Formulating user navigation as a Markov Decision Process (MDP), ClickVision models session events as state transitions. By computing RL transition probability matrices alongside user demographic features, the system estimates the real-time probability of a user reaching a deposit event. This allowed Gamezop to allocate targeted promotional offers exclusively to high-intent users, reducing offer wastage.",
    highlights: [
      "Modeled multi-step clickstream event sequences as Markov Decision Process (MDP) state transitions.",
      "Reduced wasted marketing promotional offers and user churn by 62%.",
      "Shipped production model predictions directly driving downstream UI flow modifications.",
    ],
    results: "Increased deposit conversion efficiency while reducing promotional spend and churn by 62%.",
  },
  {
    slug: "archglyph-ocr",
    title: "ArchGlyphOCR",
    subtitle: "Dense Architectural Blueprint Callout & Vector OCR Pipeline",
    category: "Employment Project",
    organization: "Attentive.AI",
    orgSlug: "attentive.ai",
    dates: "Jun 2025 - Present",
    technologies: ["Vector Path Tokenization", "DEIMv2", "DINOv3", "Text Region Proposal", "OpenCV", "PyTorch"],
    shortDescription:
      "Dense plan text-region proposal + prediction pipeline for high-resolution blueprints, outperforming Google DocAI & Gemini 3.1 Pro on callout extraction while eliminating API costs.",
    fullDescription:
      "ArchGlyphOCR is a novel document AI architecture designed at Attentive.AI specifically for dense architectural blueprints and CAD construction plans. Traditional OCR solutions (such as Google DocAI and Gemini) struggle on large-format engineering drawings with rotated callouts, leader lines, and dense spatial annotations. ArchGlyphOCR combines a vector path pretraining framework (PDF → SVG tokenization) with a DEIMv2 (DINOv3 backbone) multi-class segmentation network to propose text regions and extract dimension callouts with 7% higher macro-F1 score.",
    highlights: [
      "Outperformed Google DocAI and Gemini 3.1 Pro on dense architectural plan callout extraction benchmarks.",
      "Reduced total annotation time (TAT) for HVAC ducting plans to 35% of original baseline.",
      "Eliminated expensive third-party vision API costs through self-hosted on-prem deployment.",
    ],
    results: "Boosted vector callout parsing accuracy by 7% while reducing annotation turnaround time to 35%.",
  },
];

// Helper Functions
export function getWorkBySlug(slug: string): WorkEntry | undefined {
  return DATA.work.find((w) => w.slug === slug);
}

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return ALL_PROJECTS_DETAILS.find((p) => p.slug === slug);
}

export function getProjectsByWorkSlug(orgSlug: string): ProjectDetail[] {
  return ALL_PROJECTS_DETAILS.filter((p) => p.orgSlug === orgSlug);
}
