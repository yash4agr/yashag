// ============================================
// PORTFOLIO DATA - Edit this file to update portfolio
// ============================================

export interface SocialLink {
  platform: string;
  url: string;
  icon: "github" | "linkedin" | "mail" | "peerlist" | "substack" | "twitter";
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  points: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  date: string;
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  gpa?: string;
  coursework?: string[];
}

// ============================================
// PERSONAL INFO
// ============================================
export const personalInfo = {
  name: "Yash Agrawal",
  title: "AI/ML Engineer",
  tagline: "B.S. Data Science student at IIT Madras, passionate about building intelligent systems with ML/DL, RAG pipelines, and scalable backend architectures.",
  email: "yash4agr@gmail.com",
  resumeUrl: "/resume/Yash_s_Resume.pdf",
};

// ============================================
// SOCIAL LINKS
// ============================================
export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/yash4agr",
    icon: "github",
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/yash4agr",
    icon: "linkedin",
  },
  {
    platform: "Peerlist",
    url: "https://peerlist.io/yash4agr",
    icon: "peerlist",
  },
  {
    platform: "Substack",
    url: "https://substack.com/@yash4agr",
    icon: "substack",
  },
];

// ============================================
// EXPERIENCE
// ============================================
export const experiences: Experience[] = [
  {
    title: "Software Development Intern",
    company: "UniteCare Software Solutions",
    period: "Sep – Oct 2025",
    points: [
      "Accelerated physician review by delivering AI-generated clinical summaries from unstructured patient visit notes.",
      "Scaled an asynchronous system on Azure Container Apps to process over 10,000 PDFs daily.",
      "Achieved over 95% test name accuracy for lab trend plotting by architecting a hybrid normalization service.",
    ],
  },
  {
    title: "Freelance Developer",
    company: "EVD Technology",
    period: "July 2024",
    points: [
      "Enhanced FBRef web scraping, boosting data reliability by 80% for player/team stats.",
      "Streamlined data ingestion using ChatGPT and PostgreSQL to enable natural language–driven session planning.",
      "Integrated Dockerized frontend, API, and action servers on AWS EC2, reducing deployment time by 50%.",
    ],
  },
];

// ============================================
// PROJECTS
// ============================================
export const projects: Project[] = [
  {
    title: "Psych-LLM",
    description: "RAG pipeline using ChromaDB and meta-llama for psychology research assistance",
    tech: ["Python", "ChromaDB", "meta-llama", "pdfplumber"],
    date: "Feb 2025",
    highlights: [
      "90% relevant document retrieval accuracy",
      "25% reduction in processing time",
      "LLM-based answer generation with source attribution",
    ],
    githubUrl: "https://github.com/yash4agr", // Update with actual repo
    // liveUrl: "https://example.com", // Add if available
  },
  {
    title: "Home Service Platform",
    description: "Full-stack service marketplace with role-based access and real-time dashboards",
    tech: ["Vue.js", "Flask", "Redis", "Celery", "Docker"],
    date: "Oct – Nov 2024",
    highlights: [
      "25% API response time improvement via Redis caching",
      "Automated service monitoring with Celery",
      "Containerized deployment with Docker Compose",
    ],
    githubUrl: "https://github.com/yash4agr", // Update with actual repo
  },
  {
    title: "TuneIn - Music Streaming",
    description: "Web application for streaming music with secure authentication",
    tech: ["Python", "Flask", "SQLAlchemy", "HTML/CSS"],
    date: "Oct – Dec 2023",
    highlights: [
      "Secure user authentication system",
      "20% reduction in login issues",
      "Full frontend-backend integration",
    ],
    githubUrl: "https://github.com/yash4agr", // Update with actual repo
  },
];

// ============================================
// SKILLS
// ============================================
export const skillCategories: SkillCategory[] = [
  {
    category: "Programming",
    skills: ["Python", "JavaScript", "SQL", "Bash"],
  },
  {
    category: "ML/DL",
    skills: ["PyTorch", "TensorFlow", "HuggingFace", "LangChain", "ChromaDB", "spaCy", "NLTK"],
  },
  {
    category: "Data Tools",
    skills: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Tableau"],
  },
  {
    category: "DevOps",
    skills: ["AWS EC2", "Docker", "GitHub Actions", "Linux", "NGINX", "PostgreSQL"],
  },
  {
    category: "Frameworks",
    skills: ["Flask", "FastAPI", "Vue.js", "React", "Node.js"],
  },
];

// ============================================
// EDUCATION
// ============================================
export const education: Education = {
  institution: "Indian Institute of Technology, Madras",
  degree: "B.S. Data Science and Application",
  period: "2022 – 2026",
  gpa: "8.89/10.0",
  coursework: [
    "AI",
    "Deep Learning",
    "Machine Learning Techniques",
    "Tools in Data Science",
    "Programming",
    "Data Structures & Algorithms",
    "System Commands",
    "Linear Algebra",
    "Probability & Statistics",
  ],
};

// ============================================
// BLOG CONFIG
// ============================================
export const blogConfig = {
  enabled: false, // Set to true when you have blog posts
  substackUrl: "https://substack.com/@yash4agr",
  description: "I'll be sharing insights on AI/ML, data science, and my journey in tech. Stay tuned for articles on RAG pipelines, ML engineering, and more.",
};

// ============================================
// NAV LINKS
// ============================================
export const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];
