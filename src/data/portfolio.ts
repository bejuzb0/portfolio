/** Site content migrated from resume / previous Next.js portfolio. */

export const SITE = {
  firstName: "ADITYA",
  lastName: "KUMAR",
  initials: "AK",
  titleLine1: "Software",
  titleLine2: "Engineer",
  titleAlt1: "Full-Stack",
  titleAlt2: "Systems",
  tagline:
    "Full-stack engineer focused on AI systems, scalable backends, and great UX.",
  landingLead: "M.S. Computer Science · UW–Madison",
  about: `Results-driven software engineer with experience building scalable full-stack applications and AI-driven systems. M.S. in Computer Science at UW–Madison. Proven track record optimizing backend pipelines, shipping microservices, and delivering LLM-powered products in production.`,
  url: "https://bejuzb0.github.io/portfolio",
  location: "Madison, Wisconsin",
  linkedIn: "https://linkedin.com/in/aditya8132",
  github: "https://github.com/bejuzb0",
  resumeUrl:
    "https://drive.google.com/file/d/1neaWmD61bMWlwxnxQWqrHRJw7JON3okl/view?usp=sharing",
  email: "aditya8132@gmail.com",
  tel: "+16082096428",
} as const;

export type CareerEntry = {
  role: string;
  org: string;
  periodLabel: string;
  summary: string;
};

export const CAREER: CareerEntry[] = [
  {
    role: "M.S. Computer Science",
    org: "University of Wisconsin–Madison",
    periodLabel: "NOW",
    summary:
      "CGPA 4.0/4.0. Coursework: Machine Learning, AI, Foundation Models, Big Data Systems, Computer Vision.",
  },
  {
    role: "Incoming Software Engineer Intern, Cortex",
    org: "Snowflake · Menlo Park, CA",
    periodLabel: "May–Aug 2026",
    summary:
      "Incoming Summer Software Engineer Intern on the Cortex team, focused on AI/ML infrastructure and intelligent data cloud services.",
  },
  {
    role: "Senior Software Engineer",
    org: "Optum, UnitedHealth Group · Bangalore",
    periodLabel: "Apr 2023 – Aug 2025",
    summary:
      "Event-driven call summarization system (80K+ API requests/day) using Kafka, serverless functions, and LLMs; real-time LLM-powered chat for 1,000+ agents using Flask, React, and RAG; latency reduced 50% via UX + entity recognition optimizations; distributed ingestion for 250K documents/day; improved CI/CD and led code reviews for a team of 4.",
  },
  {
    role: "Software Engineer",
    org: "Optum, UnitedHealth Group · Bangalore",
    periodLabel: "Aug 2021 – Mar 2023",
    summary:
      "Python ML pipeline to operationalize unserved customer intents (60% fewer unidentified utterances); Azure Bot Framework streaming strategy improving time-to-first-token (40% faster); plug-and-play Node.js escalation microservices handling 300K+ daily messages with queues, Redis, and Terraform; 99.9% availability with 150+ production incidents resolved and improved observability/runbooks.",
  },
  {
    role: "Android Developer Intern",
    org: "Organic India, ASHA Groups · Remote",
    periodLabel: "Apr–May 2020",
    summary:
      "Shipped Android e-commerce app to Play Store; Firebase backend, auth, and Cloud Functions.",
  },
];

export type ProjectSlide = {
  title: string;
  category: string;
  tools: string;
  /** Path under `public/` e.g. `images/foo.png`, or empty for placeholder */
  image: string;
  link: string;
};

export const PROJECTS: ProjectSlide[] = [
  {
    title: "Shadow Exchange",
    category: "Fault-tolerant distributed matching engine",
    tools:
      "Go, gRPC, Protocol Buffers, Raft, Docker, Prometheus · 50K+ orders/sec, <100µs p99 latency, chaos testing for state consistency",
    image: "",
    link: "https://github.com/bejuzb0/shadowstock",
  },
  {
    title: "TurboQuant Compression on CLIP Multimodal Embeddings",
    category:
      "Embedding compression for multimodal retrieval — CS 639 Foundation Models · UW–Madison",
    tools:
      "Python, NumPy, FAISS, CLIP, PyTorch · Benchmarked QJL/PolarQuant/TurboQuant vs FAISS-PQ across 1–32 bits on 150K+ image-caption pairs; Recall@1/5/10 for cross- and same-modal retrieval",
    image: "",
    link: "https://bejuzb0.github.io/tq-report/",
  },
  {
    title: "Pedestrian Intent Prediction",
    category:
      "Pedestrian crossing intent for AVs — CS 766 Computer Vision · UW–Madison",
    tools:
      "PyTorch, CLIP, Grad-CAM++, knowledge distillation · Audited EfficientPIE (IJCAI 2025) with spatial ablations + Grad-CAM++; CLIP ViT-B/32 offline distillation to study attention debiasing without added inference latency",
    image: "",
    link: "https://bejuzb0.github.io/EfficientPIE/",
  },
  {
    title: "SellInSeconds",
    category: "AI campus marketplace",
    tools:
      "Next.js, TypeScript, Python, FastAPI, Supabase, Anthropic API, Google Maps",
    image: "",
    link: "https://github.com/bejuzb0/SellinSeconds",
  },
  {
    title: "Canvase",
    category: "Interactive wireframing engine",
    tools:
      "React, JavaScript, CSS · DOM-centric (div) objects, decoupled state logic, multi-modal zooming, click-and-drag interactions",
    image: "",
    link: "",
  },
];

export const WHAT_I_DO = [
  {
    heading: "AI & CONVERSATIONAL SYSTEMS",
    sub: "LLMs, RAG, and production chat",
    body: "Design and ship assistive AI: RAG Q&A, real-time suggestions, and streaming responses—with evals, guardrails, and measurable latency wins.",
    tags: [
      "LLMs & RAG",
      "Prompting",
      "Vector / retrieval",
      "Azure Bot Framework",
      "OpenAI / CCAI",
    ],
  },
  {
    heading: "BUILD & SCALE",
    sub: "Backends, data, and reliability",
    body: "End-to-end services: Flask/FastAPI, Node.js, Kafka, Redis, Docker, Terraform—event-driven pipelines and platforms that stay up under load.",
    tags: [
      "Python",
      "React",
      "REST / WebSockets",
      "Kafka",
      "Kubernetes",
      "CI/CD",
    ],
  },
] as const;

export const EDUCATION_CONTACT = [
  {
    school: "University of Wisconsin–Madison",
    detail: "M.S. Computer Science — Aug 2025 – May 2027",
  },
  {
    school: "Manipal Institute of Technology",
    detail: "B.Tech Computer Science & Engineering — Jul 2017 – Aug 2021",
  },
] as const;

export const LOADING_MARQUEE = [
  "Software Engineer",
  "Full-Stack",
  "AI & Systems",
  "Software Engineer",
  "Full-Stack",
] as const;
