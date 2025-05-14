export type Project = {
    name: string;
    description: string;
    sourceCode: string;
    deployedLink: string;
    video?: string;
    id: string;
};

export type WorkExperience = {
    company: string;
    title: string;
    start: string;
    end: string;
    link: string;
    id: string;
};

export type AcademicBackground = {
    school: string;
    degree: string;
    start: string;
    end: string;
    link: string;
    id: string;
};

export type SocialLink = {
    label: string;
    link: string;
};

export type Skills = {
    type: string;
    contents: string[];
};

export const PROJECTS: Project[] = [
    {
        name: "Project1",
        description:
            "Description bout project 1.hgsacjhgsac asjcakcajscakjs cak",
        sourceCode: "sgdsggd",
        deployedLink: "https://project1.com",
        video: "https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0",
        id: "project1",
    },
    {
        name: "Project2",
        description:
            "Description bout project 2.hgsacjhgsac asjcakcajscakjs cak",
        sourceCode: "",
        deployedLink: "https://project2.com",
        video: "https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0",
        id: "project2",
    },
    {
        name: "Project3",
        description: "Description bout project 2.",
        sourceCode: "",
        deployedLink: "https://project2.com",
        video: "https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0",
        id: "project3",
    },
];

export const EDUCATION: AcademicBackground[] = [
    {
        school: "IIT(ISM) Dhanbad",
        degree: "Bachelors in Electronics and Communication",
        start: "2022",
        end: "Present",
        link: "https://www.iitism.ac.in/",
        id: "work1",
    },
];

export const SOCIAL_LINKS: SocialLink[] = [
    {
        label: "Github",
        link: "https://github.com/iemio",
    },
    {
        label: "X",
        link: "https://x.com/iemio",
    },
    {
        label: "LinkedIn",
        link: "https://www.linkedin.com/in/keshav",
    },
    {
        label: "Instagram",
        link: "https://www.instagram.com/iemio",
    },
];

export const EMAIL = "your@email.com";

export const SKILLS: Skills[] = [
    {
        type: "Languages",
        contents: [
            "C",
            "C++",
            "Python",
            "Kotlin",
            "JavaScript",
            "TypeScript",
            "Go",
        ],
    },

    {
        type: "Frontend Frameworks",
        contents: ["React.js", "Next.js", "Django"],
    },
    {
        type: "Backend Frameworks",
        contents: [
            "Flask",
            "Nodejs",
            "FastAPI",
            "Honojs",
            "Fastify",
            "Expressjs",
        ],
    },
    {
        type: "DL Frameworks",
        contents: ["Tensorflow", "Keras", "Pytorch"],
    },
    {
        type: "Cloud services",
        contents: ["AWS", "GCP", "Cloudfare"],
    },
    {
        type: "Technologies",
        contents: ["Docker", "Kubernetes"],
    },
    {
        type: "Agentic AI Frameworks",
        contents: ["Crew AI", "Langchain", "Langgraph", "LlamaIndex"],
    },
    {
        type: "Databases",
        contents: [
            "SQLite",
            "Firebase Realtime Database",
            "PostgreSQL",
            "MongoDB",
            "Redis",
            "Neo4j (Cypher)",
            "Vector databases(Pinecone,FAISS, Weaviate)",
        ],
    },
    // {
    //     type: "Tools",
    //     contents: [
    //         "Android Studio",
    //         "VS Code",
    //         "Git/Github",
    //         "Linux",
    //         "Kaggle/Colab/Jupyter",
    //     ],
    // },
    // {
    //     type: "Concepts",
    //     contents: ["Microservices architecture", "DevOPs"],
    // },
];
