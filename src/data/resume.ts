import { Code, MapPin, Gamepad2, Camera } from "lucide-react";

export const DATA = {
    name: "Aditya Kumar",
    initials: "AK",
    url: "https://aditya8132.github.io/portfolio",
    location: "Madison, Wisconsin",
    locationLink: "https://www.google.com/maps/place/Madison,+WI",
    description: "Software Engineer focusing on full-stack development, AI, and scalable systems.",
    summary: "Results-driven Software Engineer with extensive experience building scalable full-stack applications and AI-driven systems. M.S. in Computer Science student at UW-Madison. Proven track record of optimizing backend pipelines, enhancing user experience, and delivering robust microservices.",
    avatarUrl: "/portfolio/avatar-min.jpeg",
    skills: [
        "Python", "Java", "C", "C#", "C++", "Go", "JavaScript", "TypeScript", "HTML", "CSS", "Bash", "SQL",
        "React", "Flask", "FastAPI", "NodeJS", "Express", "Android", "Spring", "Mocha", "REST API", "gRPC",
        "Git", "Jenkins", "Docker", "Terraform", "Redis", "Queues", "Kafka", "MongoDB", "Kubernetes", "Prometheus", "Cassandra", "Hadoop", "Spark",
        "OpenAI", "Google CCAI", "Prompt Engineering", "RAG Pipelines", "Azure Bot Framework"
    ],
    contact: {
        email: "aditya8132@gmail.com",
        tel: "+16082096428",
        resumeUrl: "https://drive.google.com/file/d/1neaWmD61bMWlwxnxQWqrHRJw7JON3okl/view?usp=sharing",
        social: {
            LinkedIn: {
                name: "LinkedIn",
                url: "https://linkedin.com/in/aditya8132",
                icon: "linkedin",
            },
        },
    },
    work: [
        {
            company: "Optum, UnitedHealth Group",
            href: "https://optum.com",
            badges: [],
            location: "Bangalore, India",
            title: "Senior Software Engineer",
            logoUrl: "",
            start: "Apr 2023",
            end: "Aug 2025",
            description: [
                "Architected an event-driven call summarization system handling 80K+ API requests daily using Kafka, serverless functions, and LLMs, eliminating 35 seconds of manual documentation per call.",
                "Developed a real-time LLM-powered chat system (Flask, ReactJS, RAG), reducing average call handling time by 25% for 1,000+ agents.",
                "Optimized entity recognition and interaction flows, reducing latency by 50%.",
                "Deployed a distributed RAG ingestion pipeline processing 250K documents daily, improving accuracy and cutting resolution time by 20%.",
                "Optimized CI/CD pipelines (GitHub Actions), increasing deployment frequency by 15%."
            ]
        },
        {
            company: "Optum, UnitedHealth Group",
            href: "https://optum.com",
            badges: [],
            location: "Bangalore, India",
            title: "Software Engineer",
            logoUrl: "",
            start: "Aug 2021",
            end: "Mar 2023",
            description: [
                "Engineered a Python ML pipeline (NLP, K-means) to identify customer intents, reducing unidentified chatbot utterances by 60%.",
                "Implemented a custom streaming strategy (Azure Bot Framework), accelerating chatbot response time by 40%.",
                "Launched a NodeJS chat escalation system using microservices (Redis, Message Queues, Terraform), handling 300K+ daily messages.",
                "Maintained 99.9% platform availability and resolved 150+ production incidents through automated alerting and on-call rotations."
            ]
        },
        {
            company: "Organic India, ASHA Groups",
            href: "",
            badges: [],
            location: "Remote",
            title: "Android Developer Intern",
            logoUrl: "",
            start: "Apr 2020",
            end: "May 2020",
            description: [
                "Developed and launched Android e-commerce app on Google Play Store, architecting a scalable, serverless backend while using Google Firebase (NoSQL DB, Authentication) and Cloud Functions for notifications."
            ]
        }
    ],
    education: [
        {
            school: "University of Wisconsin-Madison",
            href: "https://wisc.edu",
            degree: "Master of Science in Computer Science",
            logoUrl: "",
            start: "Aug 2025",
            end: "Dec 2026",
            description: "CGPA: 4.0/4.0. Coursework: Machine Learning, Artificial Intelligence, Foundation Models, Big Data Systems, Computer Vision"
        },
        {
            school: "Manipal Institute of Technology",
            href: "https://manipal.edu/mit.html",
            degree: "Bachelor of Technology in Computer Science and Engineering",
            logoUrl: "",
            start: "Jul 2017",
            end: "Aug 2021",
            description: "CGPA: 9.29/10. Coursework: Algorithms, Data Structures, Object Oriented Programming, Operating Systems, Computer Networks, Distributed Systems, Cloud Computing, Database Systems, Compiler Design"
        }
    ],
    projects: [
        {
            title: "SellInSeconds",
            href: "https://github.com/bejuzb0/SellinSeconds",
            dates: "",
            active: true,
            description: "Built a campus marketplace for students to buy, sell, or deliver items, featuring AI-driven conversational search and listing extraction via Anthropic API. Implemented proximity-based matching via Google Maps and real-time chat with an escrow-style payment flow.",
            technologies: [
                "Next.js",
                "TypeScript",
                "Tailwind 4",
                "Python",
                "FastAPI",
                "Supabase",
                "Anthropic API"
            ],
            links: [
                {
                    type: "Source",
                    href: "https://github.com/bejuzb0/SellinSeconds",
                    icon: "github",
                }
            ],
            image: "",
            video: "",
        },
        {
            title: "Canvase",
            href: "",
            dates: "",
            active: true,
            description: "Architected a React-based wireframing engine using a DOM-centric (div) approach with decoupled state logic to support extensible object types. Added support for multi-modal zooming and click-and-drag.",
            technologies: [
                "React",
                "JavaScript",
                "CSS",
                "CRA"
            ],
            links: [],
            image: "",
            video: "",
        },
        {
            title: "Steervision",
            href: "",
            dates: "",
            active: true,
            description: "Programmed web-based JavaScript game using PhaserJS which uses user's webcam feed to capture hand position using Tensorflow Handpose model to control object in game to solve puzzles with varying levels of difficulty.",
            technologies: [
                "JavaScript",
                "PhaserJS",
                "Tensorflow",
                "Handpose"
            ],
            links: [],
            image: "",
            video: "",
        },
        {
            title: "Shadowstock",
            href: "https://github.com/bejuzb0/shadowstock",
            dates: "",
            active: true,
            description: "Engineered a fault-tolerant distributed matching engine using Raft consensus and gRPC. Processes 50K+ orders/sec with <100μs p99 latency and has state consistency verified via chaos engineering.",
            technologies: [
                "Go",
                "gRPC",
                "Protocol Buffers",
                "Raft Consensus",
                "Docker",
                "Prometheus"
            ],
            links: [
                {
                    type: "Source",
                    href: "https://github.com/bejuzb0/shadowstock",
                    icon: "github",
                }
            ],
            image: "",
            video: "",
        }
    ],
    hobbies: [
        {
            name: "Chess",
            description: "Strategic thinking and pattern recognition.",
            icon: Gamepad2
        },
        {
            name: "LeetCode",
            description: "Continuous learning and problem solving.",
            icon: Code
        },
        {
            name: "Photography",
            description: "Capturing moments and exploring visual aesthetics.",
            icon: Camera
        }
    ]
} as const;
