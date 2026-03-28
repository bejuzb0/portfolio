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
    role: "Senior Software Engineer",
    org: "Optum, UnitedHealth Group · Bangalore",
    periodLabel: "2023–25",
    summary:
      "Real-time LLM assist-chat for 1,000+ agents; event-driven call summarization (80K+ API calls/day); RAG pipelines processing 250K documents/day; Flask/React, Kafka, serverless; CI/CD improvements.",
  },
  {
    role: "Software Engineer",
    org: "Optum, UnitedHealth Group · Bangalore",
    periodLabel: "2021–23",
    summary:
      "Python ML/NLP pipelines; Azure Bot Framework streaming; Node.js escalation platform (300K+ msgs/day); Redis, queues, Terraform; 99.9% availability, 150+ incidents resolved.",
  },
  {
    role: "Android Developer Intern",
    org: "Organic India, ASHA Groups · Remote",
    periodLabel: "2020",
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
    title: "SellInSeconds",
    category: "AI campus marketplace",
    tools:
      "Next.js, TypeScript, Python, FastAPI, Supabase, Anthropic API, Google Maps",
    image: "",
    link: "https://github.com/bejuzb0/SellinSeconds",
  },
  {
    title: "Shadowstock",
    category: "Distributed matching engine",
    tools: "Go, gRPC, Raft, Docker, Prometheus",
    image: "",
    link: "https://github.com/bejuzb0/shadowstock",
  },
  {
    title: "Canvase",
    category: "Interactive wireframing engine",
    tools: "React, JavaScript, CSS",
    image: "",
    link: "",
  },
  {
    title: "Steervision",
    category: "Gesture-controlled browser game",
    tools: "JavaScript, PhaserJS, TensorFlow Handpose",
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
    detail: "M.S. Computer Science — Aug 2025 – Dec 2026",
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
