import type { Project } from "./types";

/** Main and side projects. `featured: true` items appear on home Selected Work (in array order). */
export const projects: Project[] = [
  {
    id: "cognitive-chemistry-labs",
    title: "Cognitive Chemistry Labs",
    summary:
      "Cognitive Chemistry Labs makes advanced computational chemistry and drug discovery tools accessible to academia and small and mid-sized research companies. We provide affordable, transparent, and scalable AI tools to accelerate molecular research and the development of new solutions.",
    tech: ["TypeScript", "FastAPI", "Supabase", "Modal", "Stripe"],
    pillars: ["fullstack", "scientific"],
    featured: true,
    url: "https://cognichem.com",
  },
  {
    id: "scepter",
    title:
      "SCEPTER: Strategic Chaos Engine for Planning, Tactics, Experimentation and Resiliency (DARPA)",
    summary:
      "DARPA program developing AI-driven analytic engines to generate and validate novel military strategies, enabling rapid exploration of complex scenarios and discovery of new courses of action using goal-oriented agents and advanced model abstraction.",
    tech: ["Agents", "MLOps", "MLflow", "CI/CD"],
    pillars: ["ml"],
    featured: true,
    url: "https://www.darpa.mil/research/programs/scepter-strategic-chaos",
  },
  {
    id: "symbotic-utility-bot",
    title: "Symbotic Utility Bot Competition",
    summary:
      "The inaugural Symbotic Utility Bot Competition brought together college teams from the greater Boston area to tackle a real-world robotics challenge in collaboration with Symbotic engineers. The University of Massachusetts Lowell team won 1st prize, with Worcester Polytechnic Institute (WPI) and University of New Hampshire placing 2nd and 3rd, respectively.",
    tech: ["Robotics"],
    pillars: ["scientific"],
    url: "https://www.linkedin.com/posts/symbotic_at-symbotic-we-just-closed-the-first-symbotic-activity-6399302319023886336-9l0j/",
  },
  {
    id: "project-starfish",
    title: "Project Starfish",
    summary:
      "Inspired by the regenerative abilities of starfish, our multidisciplinary team designed and built a low-cost, 3D-printed prosthetic hand to help level the field for people with disabilities. The prototype uses forearm muscle sensors, a Raspberry Pi for signal processing, and motors to control finger movement. Project Starfish won first prize in the 2016 UMass Lowell Francis College of Engineering Prototyping Competition, and the Innovative Technology Solution award at the 2017 UMass Lowell DifferenceMaker 50K Idea Challenge.",
    tech: ["Raspberry Pi", "sensors", "3D printing"],
    pillars: ["scientific"],
    url: "https://www.uml.edu/engineering/research/engineering-solutions/student-research.aspx",
  },
  {
    id: "historical-figure-chatbot",
    title: "Historical figure chatbot",
    summary:
      "A full-stack app to chat with AI personas of historical figures. FastAPI backend, React frontend, SQLite DB, and support for custom personas. Modern UI and conversation history.",
    tech: ["FastAPI", "React", "SQLite"],
    pillars: ["fullstack", "ml"],
    side: true,
    github: "https://github.com/tjkessler/historical-figure-chatbot",
  },
  {
    id: "llm-fine-tuning",
    title: "LLM fine-tuning",
    summary:
      "Fine-tuning and testing language models (BERT, GPT-2) on open-access journal articles, with scripts for data prep, model training, and a web app for interactive demos.",
    tech: ["BERT", "GPT-2", "Python"],
    pillars: ["ml"],
    side: true,
    featured: true,
    github: "https://github.com/tjkessler/llm-fine-tuning",
  },
  {
    id: "rag-demo",
    title: "RAG system demo",
    summary:
      "A demo Retrieval-Augmented Generation (RAG) project with a FastAPI backend (ChromaDB, GPT-2) and a React frontend for document ingestion and question answering.",
    tech: ["FastAPI", "ChromaDB", "GPT-2", "React"],
    pillars: ["fullstack", "ml"],
    side: true,
    featured: true,
    github: "https://github.com/tjkessler/rag-demo",
  },
];

/** Home Selected Work (array order). */
export const featuredProjects = projects.filter((p) => p.featured);

/** Full `/projects` main list (non-side). */
export const mainProjects = projects.filter((p) => !p.side);

/** Full `/projects` side list. */
export const sideProjects = projects.filter((p) => p.side);
