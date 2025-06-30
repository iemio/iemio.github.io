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

export type Skills = {
    type: string;
    contents: string[];
};

export const PROJECTS: Project[] = [
    {
        name: "Bitlyn",
        description:
            "An AI-powered, real-time community for developers to share, learn, and grow together.",
        sourceCode: "https://github.com/iemio/bitlyn",
        deployedLink: "",
        video: "",
        id: "project1",
    },
    {
        name: "Synapse",
        description:
            "Project management platform for collaboration and role based controls.",
        sourceCode: "https://github.com/iemio/synapse",
        deployedLink: "https://synapse-iemio.vercel.app",
        video: "",
        id: "project4",
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

export const SOCIAL_LINKS: { [key: string]: string } = {
    Github: "https://github.com/iemio",
    X: "https://x.com/iemio_",
    LinkedIn: "https://www.linkedin.com/in/iemio",
    Instagram: "https://www.instagram.com/iemio",
};

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
        contents: ["React.js", "Next.js", "Django", "React Native"],
    },
    {
        type: "Backend Frameworks",
        contents: [
            "Flask",
            "Nodejs",
            "FastAPI",
            "Honojs",
            "Fastify",
            "Nestjs",
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
            "My SQL",
            "PostgreSQL",
            "MongoDB",
            "Redis",
            "Vector databases",
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
