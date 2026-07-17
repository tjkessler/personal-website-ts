import type { SkillGroup } from "./types";

/** Skills grouped for the site pillars (from CV Technical Skills + Experience stack). */
export const skillGroups: SkillGroup[] = [
  {
    id: "fullstack-web",
    label: "Full-stack / Web",
    skills: [
      "TypeScript",
      "React",
      "FastAPI",
      "Supabase",
      "Stripe",
      "SQL (Postgres)",
      "NoSQL",
    ],
  },
  {
    id: "ml-ai",
    label: "ML & AI",
    skills: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Predictive / statistical modeling",
      "Transformers",
      "LLM tuning",
      "RAG",
      "Vector DBs",
      "MLflow",
    ],
  },
  {
    id: "scientific-data",
    label: "Scientific computing & data",
    skills: [
      "C/C++",
      "MATLAB",
      "NumPy",
      "Pandas",
      "Jupyter",
      "Ray",
      "Dask",
      "Data pipelines",
      "Data visualization",
      "Web scraping",
    ],
  },
  {
    id: "cloud-mlops",
    label: "Cloud & MLOps",
    skills: [
      "AWS",
      "GCP",
      "Azure",
      "Docker",
      "Git",
      "CI/CD",
      "Containerization",
      "MLOps",
      "Modal",
      "Cloud deployment",
    ],
  },
];
