import type { SkillGroup } from "./types";

/** Skills grouped for the site pillars (from CV Technical Skills + Experience stack). */
export const skillGroups: SkillGroup[] = [
  {
    id: "fullstack-web",
    label: "Full-stack / Web",
    skills: [
      { label: "TypeScript", href: "https://www.typescriptlang.org/" },
      { label: "React", href: "https://react.dev/" },
      { label: "FastAPI", href: "https://fastapi.tiangolo.com/" },
      { label: "Supabase", href: "https://supabase.com/" },
      { label: "Stripe", href: "https://stripe.com/" },
      { label: "SQL (Postgres)", href: "https://www.postgresql.org/" },
      { label: "NoSQL", href: "https://en.wikipedia.org/wiki/NoSQL" },
    ],
  },
  {
    id: "ml-ai",
    label: "ML & AI",
    skills: [
      { label: "Python", href: "https://www.python.org/" },
      { label: "TensorFlow", href: "https://www.tensorflow.org/" },
      { label: "PyTorch", href: "https://pytorch.org/" },
      { label: "Scikit-learn", href: "https://scikit-learn.org/" },
      {
        label: "Predictive / statistical modeling",
        href: "https://en.wikipedia.org/wiki/Predictive_modelling",
      },
      {
        label: "Transformers",
        href: "https://en.wikipedia.org/wiki/Transformer_(deep_learning)",
      },
      {
        label: "LLM tuning",
        href: "https://en.wikipedia.org/wiki/Fine-tuning_(deep_learning)",
      },
      {
        label: "RAG",
        href: "https://en.wikipedia.org/wiki/Retrieval-augmented_generation",
      },
      {
        label: "Vector DBs",
        href: "https://en.wikipedia.org/wiki/Vector_database",
      },
      { label: "MLflow", href: "https://mlflow.org/" },
    ],
  },
  {
    id: "scientific-data",
    label: "Scientific computing & data",
    skills: [
      { label: "C/C++", href: "https://en.cppreference.com/w/" },
      {
        label: "MATLAB",
        href: "https://www.mathworks.com/products/matlab.html",
      },
      { label: "NumPy", href: "https://numpy.org/" },
      { label: "Pandas", href: "https://pandas.pydata.org/" },
      { label: "Jupyter", href: "https://jupyter.org/" },
      { label: "Ray", href: "https://www.ray.io/" },
      { label: "Dask", href: "https://www.dask.org/" },
      {
        label: "Data pipelines",
        href: "https://en.wikipedia.org/wiki/Data_pipeline",
      },
      {
        label: "Data visualization",
        href: "https://en.wikipedia.org/wiki/Data_and_information_visualization",
      },
      {
        label: "Web scraping",
        href: "https://en.wikipedia.org/wiki/Web_scraping",
      },
    ],
  },
  {
    id: "cloud-mlops",
    label: "Cloud & MLOps",
    skills: [
      { label: "AWS", href: "https://aws.amazon.com/" },
      { label: "GCP", href: "https://cloud.google.com/" },
      { label: "Azure", href: "https://azure.microsoft.com/" },
      { label: "Docker", href: "https://www.docker.com/" },
      { label: "Git", href: "https://git-scm.com/" },
      { label: "CI/CD", href: "https://en.wikipedia.org/wiki/CI/CD" },
      {
        label: "Containerization",
        href: "https://en.wikipedia.org/wiki/OS-level_virtualization",
      },
      { label: "MLOps", href: "https://en.wikipedia.org/wiki/MLOps" },
      { label: "Modal", href: "https://modal.com/" },
      {
        label: "Cloud deployment",
        href: "https://en.wikipedia.org/wiki/Cloud_computing",
      },
    ],
  },
];
