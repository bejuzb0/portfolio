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
        "React", "Flask", "FastAPI", "NodeJS", "Express", "Android", "Spring", "Mocha", "REST API", "gRPC",
        "Git", "Jenkins", "Docker", "Terraform", "Redis", "Queues", "Kafka", "MongoDB", "Kubernetes", "Cassandra", "Hadoop", "Spark",
        "OpenAI", "Google CCAI", "Prompt Engineering", "RAG Pipelines", "Azure Bot Framework"
    ],
    contact: {
        email: "aditya8132@gmail.com",
        tel: "+16082096428",
        resumeUrl: "https://drive.google.com/file/d/1AW_jzefphmNlq4nXfnM3YNNo_4kvesAs/view?usp=sharing",
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
                "Developed an assist-chat widget for on-call agents using React and websockets, which reduced the average call time for agents by 25% by providing real-time suggestions relevant to the caller.",
                "Owned end-to-end development of the backend system with dockerized flask APIs, leveraged LLMs for relevant suggestions, supporting RAG QnA and scaled the system to support 1000+ concurrent agents.",
                "Collaborated with UX/PM to define user experience and halved entity recognition latency during call.",
                "Architected an event-driven scalable system to generate post-call summaries for agents, eliminating an average of 35 seconds of manual post-call documentation per call while handing 80K+ API calls for summarizations daily, using kafka and serverless functions to ingest high-volume of call data.",
                "Constructed a smart microservice pipeline to efficiently process 250K documents daily, eliminating stale data in RAG QnA service leading to increased accuracy and 20% reduction in advocate response times.",
                "Led code reviews for team of 4 & optimized CI/CD via github action, boosting deployment frequency by 15%."
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
                "Engineered a Python-based ML pipeline to reduce unidentified user utterances in chatbots by 60%. Utilized NLP and K-means clustering to identify and operationalize previously unserved customer intents.",
                "Accelerated chatbot response time roughly 40% by implementing a custom streaming strategy in Azure Bot Framework, prioritizing time-to-first-token over full-response completion.",
                "Owned end-to-end lifecycle of a plug-and-play NodeJS chat escalation system used across 3 platforms by 5 clients within a month of launch, handling 300K+ daily messages.",
                "Utilized Messaging queues for asynchronous messages from agent and scaling, Redis for user-context management, with APIs for agent availability and conversation management, provisioned via Terraform (IaC).",
                "Participated in on-call rotations, resolving 150+ incidents while ensuring 99.9% platform availability."
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
