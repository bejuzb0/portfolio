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
        "Python", "Java", "C", "C#", "C++", "JavaScript", "TypeScript", "HTML", "CSS", "Bash", "SQL",
        "React", "Flask", "FastAPI", "NodeJS", "Express", "Android", "Spring", "Mocha",
        "Git", "Docker", "Terraform", "Redis", "Kafka", "MongoDB", "Kubernetes", "Cassandra", "Hadoop", "Spark",
        "OpenAI", "Google CCAI", "Prompt Engineering", "RAG Pipelines", "Azure Bot Framework"
    ],
    contact: {
        email: "aditya8132@gmail.com",
        tel: "+16082096428",
        resumeUrl: "https://drive.google.com/file/d/1l03V0_zgOTi4Zom19C3Mh-bD9sdQSYFB/view?usp=sharing",
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
                "Developed an assist-chat widget for on-call agents using React and websockets, reducing average call time by 25%.",
                "Owned backend with dockerized Flask APIs leveraging LLMs for RAG QnA (1000+ concurrent agents).",
                "Architected event-driven Kafka summarization system handling 80K+ daily API calls.",
                "Built microservice pipeline processing 250K documents daily, reducing advocate response time by 20%.",
                "Led code reviews and optimized CI/CD."
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
                "Engineered Python ML pipeline reducing unidentified user utterances by 60% using NLP and K-means clustering.",
                "Accelerated chatbot response time by 40% with custom Azure Bot streaming strategy.",
                "Owned full lifecycle of scalable NodeJS chat escalation system handling 300K+ daily messages using Redis and Terraform.",
                "Participated in on-call resolving 150+ incidents (99.9% uptime)."
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
            title: "Canvase",
            href: "",
            dates: "",
            active: true,
            description: "Interactive Wireframing Engine. Architected a React-based wireframing engine using a DOM-centric approach with decoupled state logic to support extensible object types. Added support for multi-modal zooming and click-and-drag.",
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
            description: "Gesture-Controlled Browser Game. Programmed web-based JavaScript game using PhaserJS which uses user's webcam feed to capture hand position using Tensorflow Handpose model to control object in game to solve puzzles.",
            technologies: [
                "JavaScript",
                "PhaserJS",
                "Tensorflow",
                "Handpose"
            ],
            links: [],
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
