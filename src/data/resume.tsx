import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

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
  ],

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

  // Peer-Reviewed Publications ONLY
  projects: [
    {
      title: "TrackletGPT",
      href: "https://github.com/anoushkrit/TrackletGPT",
      dates: "ISBI 2026",
      active: true,
      description:
        "Accepted at IEEE International Symposium on Biomedical Imaging (ISBI 2026, London, UK): **TrackletGPT: A GPT architecture for White Matter Segmentation** (Conference Rank: A). Tokenizes B-Spline streamline sub-segments for 3D point cloud reconstruction.",
      technologies: [
        "3D Spatial AI",
        "B-Spline Tokenization",
        "GPT Transformers",
        "PyTorch3D",
      ],
      bibtex: `@inproceedings{goel2026trackletgpt,
  title={TrackletGPT: A GPT architecture for White Matter Segmentation},
  author={Goel, Anoushkrit and Nigam, Aditya and Bhavsar, Arnav},
  booktitle={IEEE International Symposium on Biomedical Imaging (ISBI)},
  year={2026}
}`,
      links: [
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
      href: "https://github.com/anoushkrit",
      dates: "ISBI 2026",
      active: true,
      description:
        "Accepted at IEEE International Symposium on Biomedical Imaging (ISBI 2026, London, UK): **TractRLFusion**. Reinforcement Learning and fusion networks for diffusion MRI tractography.",
      technologies: [
        "Reinforcement Learning",
        "Fusion Networks",
        "Diffusion MRI",
        "PyTorch",
      ],
      bibtex: `@inproceedings{goel2026tractrlfusion,
  title={TractRLFusion: Reinforcement Learning and Fusion Networks for Diffusion MRI},
  author={Goel, Anoushkrit and Nigam, Aditya and Bhavsar, Arnav},
  booktitle={IEEE International Symposium on Biomedical Imaging (ISBI)},
  year={2026}
}`,
      links: [],
      image: "",
      video: "",
    },
    {
      title: "TractoGPT",
      href: "https://arxiv.org/abs/2411.08187",
      dates: "ISBI 2025",
      active: true,
      description:
        "Accepted at 23rd ISBI 2025 (Houston, TX): **TractoGPT**. Models tractography streamlines as 3D point cloud patches pretrained via dual-masking. **Outperformed Sherbrooke Connectivity Imaging Lab (SCIL)'s FIESTA SOTA**.",
      technologies: [
        "3D Spatial AI",
        "Dual-Masked Pretraining",
        "GPT Transformers",
        "SCIL Benchmark",
      ],
      bibtex: `@article{goel2024tractogpt,
  title={TractoGPT: A GPT architecture for White Matter Segmentation},
  author={Goel, Anoushkrit and Nigam, Aditya and Bhavsar, Arnav},
  journal={arXiv preprint arXiv:2411.08187},
  year={2024}
}`,
      links: [
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
      href: "https://link.springer.com/chapter/10.1007/978-3-031-78104-9_17",
      dates: "ICPR 2024",
      active: true,
      description:
        "Accepted at 27th ICPR 2024 (Kolkata): **TractoEmbed**. Modular multi-embedding framework using CNN, dVAE, and PointNet. **Outperformed Harvard Medical School's TractCloud on White Matter Tract Segmentation**.",
      technologies: [
        "Representation Learning",
        "PointNet / dVAE",
        "Harvard Benchmark",
        "Neuroimaging",
      ],
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
          type: "Paper",
          href: "https://link.springer.com/chapter/10.1007/978-3-031-78104-9_17",
          icon: <Icons.globe className="h-4 w-4" />,
        },
        {
          type: "ArXiv",
          href: "https://arxiv.org/abs/2411.08187",
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
      href: "https://link.springer.com/chapter/10.1007/978-3-031-78201-5_17",
      dates: "ICPR 2024",
      active: true,
      description:
        "Accepted at 27th ICPR 2024: **Tract-RLformer**. Supervised + Reinforcement Learning 2-stage policy refinement. **Outperformed SCIL's Track2Learn, DeepTract, and PFT (Particle Filtering Tracking)**.",
      technologies: [
        "Reinforcement Learning",
        "Decoder Transformers",
        "SCIL Benchmark",
        "PyTorch / OpenAI Gym",
      ],
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
          type: "Paper",
          href: "https://link.springer.com/chapter/10.1007/978-3-031-78201-5_17",
          icon: <Icons.globe className="h-4 w-4" />,
        },
        {
          type: "ArXiv",
          href: "https://arxiv.org/abs/2411.05757",
          icon: <Icons.globe className="h-4 w-4" />,
        },
      ],
      image: "",
      video: "",
    },
  ],

  // Open Source Software Extensions & Tools
  softwareTools: [
    {
      title: "SlicerTracto",
      href: "https://github.com/anoushkrit/SlicerTracto",
      dates: "Dec 2024 - Present",
      description:
        "Open-source 3D Slicer desktop extension enabling Neuro-Radiologists to visualize, track, and segment white matter tracts from Diffusion MRI scans in a standalone GUI app with optional on-prem/cloud GPU compute offloading. Deployed at PGI Chandigarh.",
      technologies: ["3D Slicer", "Medical AI", "Dipy / Scilpy", "PyTorch", "Python"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/anoushkrit/SlicerTracto",
          icon: <Icons.github className="h-4 w-4" />,
        },
      ],
    },
    {
      title: "Sculpt3D & Talk2point",
      href: "https://github.com/anoushkrit/Sculpt3D",
      dates: "2024 - 2025",
      description:
        "Multimodal Text & Sketch-to-3D point cloud generation and interactive editing framework using SDFusion + LLaMA/GPT continuous feedback loops for granular region-specific 3D spatial manipulation.",
      technologies: ["Multimodal 3D AI", "SDFusion", "LLaMA / GPT", "Open3D", "PyTorch3D"],
      links: [
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
