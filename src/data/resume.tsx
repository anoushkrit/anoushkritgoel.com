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
  researchIntro:
    "In clinical scenarios, there is a need to plan surgeries, and for neurological interventions, non-invasive analysis is necessary. For this, in most clinical scenarios, MRI is used to look into the brain, and with the MRI data we aim to find the white matter tracts. The whole connectivity of the brain is understood only through the MRI scans.",
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
      logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=jio.com",
      start: "Aug 2022",
      end: "Mar 2023",
      description:
        "Worked on TelOS (formerly BrainOS), Jio's ambitious AI MLOps system integrating multiple Jio verticals and data types. Under Dr. Shailesh Kumar, worked on a sub-project Cortex: a programming language and deep learning framework agnostic Machine Learning Framework, using protocol buffers and ONNX to add programming language agnostic models and standardize model interoperability.",
    },
    {
      company: "Gamezop",
      href: "https://www.gamezop.com/",
      badges: [],
      location: "India",
      title: "Senior Data Scientist",
      logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=gamezop.com",
      start: "Jun 2021",
      end: "Jun 2022",
      description:
        "Created and deployed 'Vision', a sequential decision-making framework which predicts the deposit behaviour of signed-up users. Deployed using Markovian Transition Matrices for large clickstream data, allowing targeting and maneuvering resources toward likely-depositing users.",
    },
    {
      company: "MANAS Lab, IIT Mandi",
      href: "https://www.iitmandi.ac.in/",
      badges: [],
      location: "IIT Mandi",
      title: "Research Associate",
      logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=iitmandi.ac.in",
      start: "Oct 2021",
      end: "Present",
      description:
        "Working on Brain Tract Segmentation under the guidance of Dr. Aditya Nigam and Dr. Arnav Bhavsar. Developing a Slicer Extension capable of running models and algorithms for neuroimaging on Slicer. Peer-reviewed papers for journals and conferences (MICCAI, MIA, ISBI, ICCV).",
    },
    {
      company: "FedEx Client Project",
      href: "https://www.fedex.com/",
      badges: [],
      location: "India",
      title: "Analyst",
      logoUrl: "https://logo.clearbit.com/fedex.com",
      start: "Mar 2021",
      end: "May 2021",
      description:
        "Worked on Forecasting Sales Data for FedEx (Client) considering the impact of COVID-19. Implemented forecasting models like SARIMAX, ARIMA, and Prophet. Incorporated various exogenous variables correlated with the abnormality added due to COVID, landing FedEx as a long-term client.",
    },
    {
      company: "Tensr.AI",
      href: "https://www.tensr.ai/",
      badges: [],
      location: "India",
      title: "Founder & CEO",
      logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=tensr.ai",
      start: "Feb 2020",
      end: "Present",
      description:
        "Increasing Human Potential with Assisted AI. Developing Teresa, a Healthcare AI Assistant. Teresa allows users to triage Cardiovascular and Respiratory Ailments using Deep Learning, Digital Signal Processing, and other techniques over bodily signals received by our device (Teresa Band).",
    },
    {
      company: "xtLytics LLC",
      href: "#",
      badges: [],
      location: "Global",
      title: "Data Scientist",
      logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=xtlytics.com",
      start: "Jan 2019",
      end: "Jan 2020",
      description:
        "Developed and deployed an edge-based AI app for Low-Middle Income Countries (LMICs) to triage Breast Cancer from ultrasound images using CNNs (6,500+ images dataset). Built a state-of-the-art Invoice OCR pipeline using GCP (Google Cloud Platform) to extract tables and transform billing data for clients.",
    },
  ],

  education: [
    {
      school: "Indian Institute of Technology Mandi",
      href: "https://www.iitmandi.ac.in/",
      degree: "M.Tech by Research in Intelligent Systems (9.47/10 CGPA)",
      logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=iitmandi.ac.in",
      start: "Feb 2023",
      end: "Feb 2025",
    },
    {
      school: "Shiv Nadar University",
      href: "https://snu.edu.in/",
      degree:
        "B.Tech in Electronics and Communication Engineering (Minor in Design)",
      logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=snu.edu.in",
      start: "Jul 2015",
      end: "May 2019",
    },
  ],

  projects: [
    {
      title: "TrackletGPT",
      href: "#",
      dates: "ISBI 2026",
      active: true,
      description:
        "Accepted at the International Symposium on Biomedical Imaging (ISBI 2026), London, UK: **TrackletGPT: A GPT architecture for White Matter Segmentation** (Conference Rank: A).",
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
      title: "TractRLFusion",
      href: "#",
      dates: "ISBI 2026",
      active: true,
      description:
        "Accepted at the International Symposium on Biomedical Imaging (ISBI 2026), London, UK: **TractRLFusion**.",
      technologies: [
        "Neuroimaging",
        "Deep Learning",
        "Reinforcement Learning",
        "Fusion Networks",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "TractoGPT",
      href: "https://arxiv.org/pdf/2411.08187",
      dates: "ISBI 2025",
      active: true,
      description:
        "Accepted at the 23rd International Symposium on Biomedical Imaging (ISBI 2025), Houston, Texas: **TractoGPT: A GPT architecture for White Matter Segmentation**.",
      technologies: [
        "Neuroimaging",
        "White Matter Segmentation",
        "Transformers",
        "GPT Architectures",
      ],
      links: [
        {
          type: "ArXiv",
          href: "https://arxiv.org/pdf/2411.08187",
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
      title: "TractoEmbed",
      href: "https://arxiv.org/pdf/2411.08187",
      dates: "ICPR 2024",
      active: true,
      description:
        "Accepted at the 27th International Conference on Pattern Recognition (ICPR 2024), Kolkata: **TractoEmbed: A modular multi-embedding framework for White Matter Segmentation**.",
      technologies: [
        "Deep Learning",
        "Representation Learning",
        "Neuroimaging",
        "White Matter Segmentation",
      ],
      links: [
        {
          type: "ArXiv",
          href: "https://arxiv.org/pdf/2411.08187",
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
      href: "https://arxiv.org/abs/2411.05757",
      dates: "ICPR 2024",
      active: true,
      description:
        "Accepted at the 27th International Conference on Pattern Recognition (ICPR 2024), Kolkata: **Tract-RLformer: A tract-specific RL policy based decoder-only transformer network**.",
      technologies: [
        "Reinforcement Learning",
        "Transformers",
        "Deep Learning",
        "Neuroimaging",
      ],
      links: [
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
