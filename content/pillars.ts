import type { ProofPillar } from "./types";

/** Three proof pillars for the About section (from site positioning). */
export const pillars: ProofPillar[] = [
  {
    id: "fullstack",
    label: "Full-stack",
    summary:
      "Cognitive Chemistry Labs (TypeScript, FastAPI, Supabase, Modal, Stripe, CI/CD); LLM/RAG demos.",
  },
  {
    id: "ml",
    label: "ML/AI",
    summary:
      "SCEPTER/DARPA agents and MLOps; transformers, RAG, and fine-tuning.",
  },
  {
    id: "scientific",
    label: "Scientific computing",
    summary:
      "PhD and 12 publications; ECNet / ECabc; combustion, QSAR, and fuel property ML.",
  },
];
