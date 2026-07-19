import { Icons } from "@/components/icons";
import { HomeIcon, MicroscopeIcon, TrophyIcon } from "lucide-react";

export const DATA = {
  name: "Anoushkrit Goel",
  initials: "AG",
  url: "https://www.anoushkritgoel.com",
  location: "IIT Mandi, Himachal Pradesh, India",
  locationLink: "https://maps.google.com/?q=IIT+Mandi",
  description: "Applied Scientist | 1x Entrepreneur | Spatial AI (3D and 2D) | Medical AI | AI Researcher",
  summary:
    "Biomedical AI. Innovations & Ideas. Behavioural Psychology. Pragmatic Leadership. Sustainable Growth. Startups. Artificial Learning Paradigms. Philosophy of Life.\n\nMachine Learning | Deep Learning | LLMs | Multimodal LLMs | Reinforcement Learning\n\nMy goal is to maximize human potential by solving healthcare problems. Currently, I am pursuing my M.Tech (by Research) at IIT Mandi in Intelligent Systems under the guidance of Dr. Arnav Bhavsar and Dr. Aditya Nigam.\n\n**Research**: I work on segmenting spatially similar 3D data (point clouds), specifically white matter tract streamlines in neuroimaging. My current focus is constructing fibre streamlines and segmenting fibre bundles, while also extending work to diffusion MRI denoising and reconstruction.\n\n**Startup**: Besides working on my startup Tensr.AI, I focus on real-world problems in deep learning, deep reinforcement learning, machine learning, biomedical sciences, design, and entrepreneurship.\n\n**Industry**: I have 6+ years of combined professional, entrepreneurial, and research experience, including a Lead Data Scientist role at Jio (TelOS/BrainOS initiative under Dr. Shailesh Kumar).",
  researchIntro:
    "In clinical scenarios, there is a need to plan surgeries, and for neurological interventions, non-invasive analysis is necessary. For this, in most clinical scenarios, MRI is used to look into the brain, and with the MRI data we aim to find the white matter tracts. The whole connectivity of the brain is understood only through the MRI scans.",
  avatarUrl: "/me.png",
  skills: [
    { name: "Python" },
    { name: "PyTorch" },
    { name: "TensorFlow" },
    { name: "HuggingFace" },
    { name: "Transformers (GPT, BERT)" },
    { name: "PointGPT" },
    { name: "DEIMv2 / DINOv3" },
    { name: "OCR (Tesseract, GCP Vision, VLMs)" },
    { name: "LangChain / LangGraph" },
    { name: "RAG / GraphRAG" },
    { name: "Multimodal LLMs (Text+Image+3D)" },
    { name: "scikit-learn" },
    { name: "ONNX" },
    { name: "3D Slicer" },
    { name: "MRtrix3" },
    { name: "FSL / FreeSurfer" },
    { name: "MATLAB" },
    { name: "C / C#" },
    { name: "ProtoBuf" },
    { name: "LaTeX" },
    { name: "AWS" },
    { name: "GCP" },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "#achievements", icon: TrophyIcon, label: "Achievements" },
    { href: "#research", icon: MicroscopeIcon, label: "Research" },
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
      X: {
        name: "X",
        url: "https://x.com/anoushkrit",
        icon: Icons.x,
        navbar: true,
      },
      Link: {
        name: "Website",
        url: "https://www.anoushkritgoel.com",
        icon: Icons.globe,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:anoushkrit.work@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Attentive.AI",
      href: "https://www.attentive.ai/",
      badges: [],
      location: "Gurgaon, IN",
      title: "Research Engineer 2",
      logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=attentive.ai",
      start: "Jun 2025",
      end: "Present",
      description:
        "Architected a vector path tokenization framework (PDF → SVG) as a pretraining objective, for zero-shot symbol detection and vector path annotation, increasing SOTA by 7%, avg macro-F1. Trained and shipped DEIMv2 (DINOv3 backbone) for multi-class vector paths segmentation and geometry dimensions estimation, reducing total annotation time (TAT) for HVAC to 35% of original time. Designed, built and deployed a novel OCR for blueprints, ArchGlyphOCR, a text-region proposal + prediction pipeline for dense and high resolution plans, outperforming Google DocAI and Gemini 3.1 Pro on callout extraction, eliminating API costs, rework and longer wait-times.",
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
      description:
        "Designed foundational models for 3D streamlines using PointGPT style architectures, with novel tokenization, dual-masking pretraining, multi-embedding for WM tract segmentation. Built and deployed SlicerTracto, an open-source end-to-end 3D Slicer extension for brain MRI tractography (reconstruction, tracking, segmentation, visualization); deployed at PGI Chandigarh Hospital with options to infer from local / on-prem / cloud GPUs. Published 5 papers: ICPR'24 (TractoEmbed, TractRL-former), ISBI'25 (TractoGPT), ISBI'26 (TrackletGPT, TractRLFusion), outperforming Harvard Medical School (TractCloud) and SCIL Canada (FIESTA). GPT, BERT, RL-transformers on 3D point cloud spatial data.",
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
      description:
        "Led Cortex AI team for Reliance Jio (BrainOS) spanning across Jio's verticals, where we built framework-agnostic ML library via protobuf schemas and ONNX; mapped model ontology, parsed 6 sklearn models and PyTorch libraries into a single cross-framework schema (sklearn ↔ PyTorch ↔ TF).",
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
      description:
        "Led ClickVision: MDP-formulated deposit prediction over clickstream trajectories using RL transition matrices; reduced wasted offers and churn by 62%, improving deposit conversion; downstream UI changes were shipped based on model findings.",
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
      description:
        "Built pyCardiograms (LSTM-based SCG waveform prediction, wave annotation across ECG/PPG/SCG). Scaled to 15 members; DST DPIIT certified; incubated at SIIC IIT Kanpur, HTIC IIT Madras, IIT Mandi Catalyst; ranked #3 Himalayan Startup Trek 2019. Designing, prototyping, and building our proprietary health wearable, Teresa Band, to capture the biomedical signals.",
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
      description:
        "Invoice OCR: GCP Vision + Tesseract + Faster-RCNN to extract and structure loosely-tabular document content into .csv/.xlsx via geometric bounding-box heuristics. CADtnet: Developed an edge TFLite model (VGG-19, MobileNet, ResNet), for a mobile app to perform breast cancer triage on ultrasound images, deployed in LMICs (Low-Middle Income Countries).",
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

  projects: [
    {
      title: "TrackletGPT",
      href: "https://github.com/anoushkrit/TrackletGPT",
      dates: "ISBI 2026",
      active: true,
      description:
        "Accepted at International Symposium on Biomedical Imaging (ISBI 2026, London, UK): **TrackletGPT: A GPT architecture for White Matter Segmentation** (Conference Rank: A). Tokenizes B-Spline streamline sub-segments for point cloud reconstruction.",
      technologies: [
        "3D Spatial AI",
        "B-Spline Tokenization",
        "GPT Transformers",
        "PyTorch3D",
      ],
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
      title: "SlicerTracto",
      href: "https://github.com/anoushkrit/SlicerTracto",
      dates: "Dec 2024 - Present",
      active: true,
      description:
        "Open-source 3D Slicer extension allowing Neuro-Radiologists to visualize, track, and segment white matter tracts from Diffusion MRI scans in a standalone desktop application with optional server compute offloading.",
      technologies: [
        "3D Slicer",
        "Medical AI",
        "Dipy / Scilpy",
        "PyTorch",
        "Python",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/anoushkrit/SlicerTracto",
          icon: <Icons.github className="h-4 w-4" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Sculpt3D & Talk2point",
      href: "https://github.com/anoushkrit/Sculpt3D",
      dates: "2024 - 2025",
      active: true,
      description:
        "Multimodal Text & Sketch-to-3D point cloud generation and interactive editing framework using SDFusion + LLaMA/GPT continuous feedback loops for granular region-specific 3D spatial manipulation.",
      technologies: [
        "Multimodal 3D AI",
        "SDFusion",
        "LLaMA / GPT",
        "Open3D",
        "PyTorch3D",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/anoushkrit/Sculpt3D",
          icon: <Icons.github className="h-4 w-4" />,
        },
        {
          type: "Talk2point",
          href: "https://github.com/anoushkrit/talk2point",
          icon: <Icons.github className="h-4 w-4" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "TractoGPT",
      href: "https://arxiv.org/pdf/2411.08187",
      dates: "ISBI 2025",
      active: true,
      description:
        "Accepted at ISBI 2025 (Houston, TX): **TractoGPT**. Models tractography streamlines as 3D point cloud patches pretrained via dual-masking. **Outperformed Sherbrooke Connectivity Imaging Lab (SCIL)'s FIESTA SOTA**.",
      technologies: [
        "3D Spatial AI",
        "Dual-Masked Pretraining",
        "Transformers",
        "Neuroimaging",
      ],
      links: [
        {
          type: "ArXiv",
          href: "https://arxiv.org/pdf/2411.08187",
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
        "Accepted at ICPR 2024 (Kolkata): **TractoEmbed**. Modular multi-embedding framework using CNN, dVAE, and PointNet. **Outperformed Harvard Medical School's TractCloud on White Matter Tract Segmentation**.",
      technologies: [
        "Representation Learning",
        "PointNet / dVAE",
        "Harvard Benchmark",
        "Neuroimaging",
      ],
      links: [
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
      href: "https://link.springer.com/chapter/10.1007/978-3-031-78201-5_17",
      dates: "ICPR 2024",
      active: true,
      description:
        "Accepted at ICPR 2024: **Tract-RLformer**. Supervised + Reinforcement Learning 2-stage policy refinement. **Outperformed SCIL's Track2Learn, DeepTract, and PFT (Particle Filtering Tracking)**.",
      technologies: [
        "Reinforcement Learning",
        "Decoder Transformers",
        "SCIL Benchmark",
        "PyTorch / OpenAI Gym",
      ],
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
      title: "TractoGPT Accepted",
      dates: "Jan 2025",
      location: "Houston, Texas",
      description:
        "Paper accepted at 23rd ISBI 2025: TractoGPT for non-invasive neuroimaging analysis.",
      image: "",
      links: [],
    },
    {
      title: "TractoEmbed & Tract-RLformer Accepted",
      dates: "Jul & May 2024",
      location: "Kolkata, India",
      description:
        "Papers accepted at the 27th ICPR: TractoEmbed and Tract-RLformer.",
      image: "",
      links: [],
    },
    {
      title: "Masters Coursework Completed",
      dates: "Feb 2024",
      location: "IIT Mandi",
      description:
        "Completed intelligent systems research coursework with a peak CGPA of 9.47/10.",
      image: "",
      links: [],
    },
    {
      title: "Started Masters at IIT Mandi",
      dates: "Feb 2023",
      location: "IIT Mandi",
      description:
        "Initiated M.Tech (by Research) under the guidance of Dr. Arnav Bhavsar and Dr. Aditya Nigam.",
      image: "",
      links: [],
    },
    {
      title: "Promoted to Lead Data Scientist",
      dates: "Oct 2022",
      location: "Reliance Jio",
      description:
        "Promoted to lead Jio's protobuf schema unification project (Cortex) under Dr. Shailesh Kumar.",
      image: "",
      links: [],
    },
    {
      title: "Joined Reliance Jio",
      dates: "Aug 2022",
      location: "Jio BrainOS / TelOS",
      description:
        "Joined Jio as Senior Data Scientist to work on language-agnostic MLOps system architectures.",
      image: "",
      links: [],
    },
    {
      title: "Joined MANAS Lab, IIT Mandi",
      dates: "Oct 2021",
      location: "Research Associate",
      description:
        "Began neuroimaging white matter tractography research under Dr. Aditya Nigam and Dr. Arnav Bhavsar.",
      image: "",
      links: [],
    },
    {
      title: "Joined Gamezop",
      dates: "Jun 2021",
      location: "Senior Data Scientist",
      description:
        "Developed and deployed clickstream deposit probability modeling frameworks.",
      image: "",
      links: [],
    },
    {
      title: "Awarded NIDHI-EIR Fellowship",
      dates: "Feb 2021",
      location: "SIIC IIT Kanpur",
      description:
        "Selected as a NIDHI-EIR Fellow at SIIC IIT Kanpur to scale Teresa heart-monitoring device prototype.",
      image: "",
      links: [],
    },
    {
      title: "IIT Madras Customer Discovery",
      dates: "Jan 2021",
      location: "IIT Madras (GDC Program)",
      description:
        "Conducted 75+ prospective healthcare customer interviews to pivot and refine Teresa band.",
      image: "",
      links: [],
    },
    {
      title: "Founded Tensr.AI",
      dates: "Feb 2020",
      location: "CEO & Founder",
      description:
        "Started Tensr.AI with the vision of increasing human potential with assisted AI assistant devices.",
      image: "",
      links: [],
    },
    {
      title: "Deployed CADt-net",
      dates: "Nov 2019",
      location: "Mexico Deployment",
      description:
        "Deployed Android-based deep learning app (TFLite + U-Net++) for low-cost breast cancer ultrasound screening in Mexico.",
      image: "",
      links: [],
    },
    {
      title: "Himalayan Startup Trek Award",
      dates: "Sep 2019",
      location: "IIT Mandi",
      description:
        "Placed 3rd out of 279 startups at the Himalayan Startup Trek 2019 Catalyst incubator.",
      image: "",
      links: [],
    },
    {
      title: "Graduated Shiv Nadar University",
      dates: "Jun 2019",
      location: "SNU",
      description:
        "Completed B.Tech in Electronics & Communication Engineering with a Minor in Design.",
      image: "",
      links: [],
    },
    {
      title: "Started Career at xtLytics",
      dates: "Jan 2019",
      location: "Data Scientist",
      description:
        "Began professional data science work on medical imaging and GCP-based Invoice OCR pipelines.",
      image: "",
      links: [],
    },
  ],

  awards: [
    {
      title: "Startup Incubation Support (IIT Mandi)",
      issuer: "IIT Mandi Catalyst",
      date: "Sep 2019",
      description:
        "Placed 3rd among 279 startups at Himalayan Startup Trek 2019. Awarded incubation support supported by DST and funded by the NIDHI Seed Support scheme.",
    },
    {
      title: "DPIIT Recognition",
      issuer: "DPIIT, Ministry of Commerce and Industry, Gov. of India",
      date: "2020",
      description:
        "Tensr.AI was awarded the official Certificate of Recognition as an AI startup enabling human augmentation.",
    },
    {
      title: "HTIC IIT Madras Incubation",
      issuer: "IIT Madras",
      date: "Jan 2021",
      description:
        "Accepted into the Healthcare Technology Innovation Centre (HTIC) pre-incubation program for the Teresa health device.",
    },
    {
      title: "NIDHI EIR Fellowship",
      issuer: "SIIC IIT Kanpur",
      date: "Feb 2021",
      description:
        "Awarded NIDHI-EIR Fellowship to scale cardiorespiratory monitoring hardware prototype (Teresa Band).",
    },
  ],

  certifications: [
    {
      title: "Deep Learning Specialization",
      issuer: "Coursera & deeplearning.ai",
      date: "Aug 2019",
      credentialId: "WXBN3CDY3J33",
      url: "https://www.coursera.org/account/accomplishments/specialization/WXBN3CDY3J33",
    },
    {
      title: "Neural Networks and Deep Learning",
      issuer: "Coursera (by Andrew Ng)",
      date: "Aug 2019",
      credentialId: "3G94WMR432EK",
      url: "https://www.coursera.org/account/accomplishments/verify/3G94WMR432EK",
    },
    {
      title: "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization",
      issuer: "Coursera (by Andrew Ng)",
      date: "Aug 2019",
      credentialId: "Z659SG7D22SG",
      url: "https://www.coursera.org/account/accomplishments/certificate/Z659SG7D22SG",
    },
    {
      title: "Sequence Models",
      issuer: "Coursera (by Andrew Ng)",
      date: "Sep 2019",
      credentialId: "G8GZ7ZJFJCUQ",
      url: "https://www.coursera.org/account/accomplishments/verify/G8GZ7ZJFJCUQ",
    },
    {
      title: "Structuring Machine Learning Projects",
      issuer: "Coursera (by Andrew Ng)",
      date: "Aug 2019",
      credentialId: "V8N6SVNRZS2J",
      url: "https://www.coursera.org/account/accomplishments/certificate/V8N6SVNRZS2J",
    },
    {
      title: "Convolutional Neural Networks",
      issuer: "Coursera (by Andrew Ng)",
      date: "Aug 2019",
      credentialId: "4KWP4593LP53",
      url: "https://www.coursera.org/account/accomplishments/certificate/4KWP4593LP53",
    },
    {
      title: "Sequences and Time Series Prediction",
      issuer: "Coursera (by Laurence Moroney)",
      date: "2019",
      credentialId: "LFNALX5FJ8SS",
      url: "https://www.coursera.org/account/accomplishments/certificate/LFNALX5FJ8SS",
    },
    {
      title: "Introduction to Reinforcement Learning",
      issuer: "Coursera Project Network",
      date: "Aug 2021",
      credentialId: "N/A",
      url: "#",
    },
    {
      title: "Introduction to PyTorch",
      issuer: "Udacity",
      date: "Dec 2019",
      credentialId: "N/A",
      url: "#",
    },
  ],
} as const;
