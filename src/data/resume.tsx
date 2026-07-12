import { Icons } from "@/components/icons";
import { HomeIcon, MicroscopeIcon, TrophyIcon } from "lucide-react";

export const DATA = {
  name: "Anoushkrit Goel",
  initials: "AG",
  url: "https://www.anoushkritgoel.com",
  location: "IIT Mandi, Himachal Pradesh, India",
  locationLink: "https://maps.google.com/?q=IIT+Mandi",
  description: "#NeverGiveUp • Entrepreneur. Researcher. Data Scientist. Artist.",
  summary:
    "Biomedical AI. Innovations & Ideas. Behavioural Psychology. Pragmatic Leadership. Sustainable Growth. Startups. Artificial Learning Paradigms. Philosophy of Life.\n\nMachine Learning | Deep Learning | LLMs | Multimodal LLMs | Reinforcement Learning\n\nMy goal is to maximize human potential by solving healthcare problems. Currently, I am pursuing my M.Tech (by Research) at IIT Mandi in Intelligent Systems under the guidance of Dr. Arnav Bhavsar and Dr. Aditya Nigam.\n\n**Research**: I work on segmenting spatially similar 3D data (point clouds), specifically white matter tract streamlines in neuroimaging. My current focus is constructing fibre streamlines and segmenting fibre bundles, while also extending work to diffusion MRI denoising and reconstruction.\n\n**Startup**: Besides working on my startup Tensr.AI, I focus on real-world problems in deep learning, deep reinforcement learning, machine learning, biomedical sciences, design, and entrepreneurship.\n\n**Industry**: I have 6+ years of combined professional, entrepreneurial, and research experience, including a Lead Data Scientist role at Jio (TelOS/BrainOS initiative under Dr. Shailesh Kumar).",
  avatarUrl: "/me.png",
  skills: [
    { name: "Machine Learning" },
    { name: "Deep Learning" },
    { name: "LLMs" },
    { name: "Multimodal LLMs" },
    { name: "Reinforcement Learning" },
    { name: "Neuroimaging" },
    { name: "Biomedical AI" },
    { name: "PyTorch" },
    { name: "TensorFlow" },
    { name: "scikit-learn" },
    { name: "ONNX" },
    { name: "MLOps" },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "#achievements", icon: TrophyIcon, label: "Achievements" },
    { href: "#research", icon: MicroscopeIcon, label: "Research" },
  ],
  contact: {
    email: "anoushkritgoel@gmail.com",
    tel: "+91",
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
        url: "mailto:anoushkritgoel@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Reliance Jio",
      href: "https://www.jio.com/",
      badges: [],
      location: "India",
      title: "Lead Data Scientist",
      logoUrl: "",
      start: "Aug 2022",
      end: "Mar 2023",
      description:
        "Worked on TelOS (formerly BrainOS), Jio's ambitious AI MLOps system integrating multiple Jio verticals and data types. Under Dr. Shailesh Kumar, contributed to Cortex: a programming language and deep learning framework agnostic ML system using protocol buffers and ONNX to standardize model interoperability.",
    },
    {
      company: "Gamezop",
      href: "https://www.gamezop.com/",
      badges: [],
      location: "India",
      title: "Senior Data Scientist",
      logoUrl: "",
      start: "Jun 2021",
      end: "Jun 2022",
      description:
        "Built and deployed 'Vision', a sequential decision-making framework for predicting user deposit behaviour from clickstream trajectories using Markovian transition matrices and ML models. The framework estimated event probabilities and improved targeting of likely-depositing users.",
    },
    {
      company: "MANAS Lab, IIT Mandi",
      href: "https://www.iitmandi.ac.in/",
      badges: [],
      location: "IIT Mandi",
      title: "Research Associate",
      logoUrl: "",
      start: "Oct 2021",
      end: "Present",
      description:
        "Working on white matter tract segmentation under Dr. Aditya Nigam and Dr. Arnav Bhavsar, with focus on tractography, segmentation, and practical deployment through a 3D Slicer extension. Also contributed to peer review activities for MICCAI, MIA, ISBI, and ICCV.",
    },
    {
      company: "FedEx Client Project",
      href: "https://www.fedex.com/",
      badges: [],
      location: "India",
      title: "Analyst",
      logoUrl: "",
      start: "Mar 2021",
      end: "May 2021",
      description:
        "Worked on COVID-aware sales forecasting using SARIMAX, ARIMA, and Prophet with exogenous signals to model abnormal demand shifts.",
    },
    {
      company: "Tensr.AI",
      href: "https://www.tensr.ai/",
      badges: [],
      location: "India",
      title: "Founder & CEO",
      logoUrl: "",
      start: "Feb 2020",
      end: "Present",
      description:
        "Built Tensr.AI around the vision of 'Increasing Human Potential with Assisted AI'. Developed Teresa, a healthcare AI assistant concept combining deep learning, signal processing, and multimodal physiological sensing for cardiovascular and respiratory triage.",
    },
    {
      company: "xtLytics LLC",
      href: "#",
      badges: [],
      location: "Global",
      title: "Data Scientist",
      logoUrl: "",
      start: "Jan 2019",
      end: "Jan 2020",
      description:
        "Developed and deployed edge AI for breast cancer triage from ultrasound images, and built invoice OCR pipelines on Google Cloud Platform for production client workflows.",
    },
  ],

  education: [
    {
      school: "Indian Institute of Technology Mandi",
      href: "https://www.iitmandi.ac.in/",
      degree: "M.Tech by Research in Intelligent Systems (9.47/10 CGPA)",
      logoUrl: "",
      start: "2023",
      end: "2025",
    },
    {
      school: "Shiv Nadar University",
      href: "https://snu.edu.in/",
      degree:
        "B.Tech in Electronics and Communication Engineering (Minor in Design)",
      logoUrl: "",
      start: "2015",
      end: "2019",
    },
  ],

  projects: [
    {
      title: "TractoGPT",
      href: "#",
      dates: "Jan 2025",
      active: true,
      description:
        "Accepted at the 27th ISBI (International Symposium on Biomedical Imaging): **TractoGPT: A GPT architecture for White Matter Segmentation**.",
      technologies: [
        "Neuroimaging",
        "White Matter Segmentation",
        "Transformers",
        "GPT Architectures",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "TractoEmbed",
      href: "#",
      dates: "Jul 2024",
      active: true,
      description:
        "Accepted at the 27th ICPR (International Conference on Pattern Recognition): **TractoEmbed: A modular multi-embedding framework for White Matter Segmentation**.",
      technologies: [
        "Deep Learning",
        "Representation Learning",
        "Neuroimaging",
        "White Matter Segmentation",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Tract-RLformer",
      href: "#",
      dates: "May 2024",
      active: true,
      description:
        "Accepted at ICPR 2024: **Tract-RLformer: A tract-specific RL policy based decoder-only transformer network**.",
      technologies: [
        "Reinforcement Learning",
        "Transformers",
        "Deep Learning",
        "Neuroimaging",
      ],
      links: [],
      image: "",
      video: "",
    },
  ],

  hackathons: [
    {
      title: "6+ years of combined experience",
      dates: "2019 - Present",
      location: "Industry + Startup + Research",
      description:
        "6+ years total experience with 4+ years of professional data science and entrepreneurial experience, and 2+ years of research experience.",
      image: "",
      links: [],
    },
    {
      title: "ISBI 2025 Acceptance",
      dates: "Jan 2025",
      location: "International Symposium on Biomedical Imaging",
      description:
        "Conference paper accepted: TractoGPT for white matter segmentation.",
      image: "",
      links: [],
    },
    {
      title: "ICPR 2024 Acceptances",
      dates: "Jul 2024 & May 2024",
      location: "International Conference on Pattern Recognition",
      description:
        "Accepted TractoEmbed and Tract-RLformer contributions in white matter segmentation and tract-specific RL-transformer modeling.",
      image: "",
      links: [],
    },
    {
      title: "Masters Coursework Milestone",
      dates: "Feb 2024",
      location: "IIT Mandi",
      description:
        "Finished coursework with 9.47 CGPA, among the highest in class.",
      image: "",
      links: [],
    },
    {
      title: "Promoted to Lead Data Scientist at Jio",
      dates: "Oct 2022",
      location: "Reliance Jio",
      description:
        "Led schema/protobuf design work for model interoperability across PyTorch, TensorFlow, and scikit-learn as part of the TelOS initiative.",
      image: "",
      links: [],
    },
    {
      title: "Himalayan Startup Trek Recognition",
      dates: "Sep 2019",
      location: "IIT Mandi",
      description:
        "Secured 3rd place among 279 startups and entered incubation track for prototype development.",
      image: "",
      links: [],
    },
  ],
} as const;
