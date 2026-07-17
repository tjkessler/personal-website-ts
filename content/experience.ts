import type { Experience } from "./types";

/** Professional timeline (newest first). Lab roles: ECRL = Energy & Combustion Research Laboratory. */
export const experience: Experience[] = [
  {
    id: "cognitive-chemistry-labs",
    role: "Founding Technical Consultant",
    org: "Cognitive Chemistry Labs",
    dates: "Apr. 2025 – Present",
    startDate: "2025-04",
    url: "https://cognichem.com",
    bullets: [
      "Engineered and deployed a highly scalable, serverless AI platform for computational chemistry and biology, accelerating high-throughput analysis and research workflows.",
      "Built and launched a full-stack web application (TypeScript frontend, FastAPI backend), integrating Supabase for authentication and database management, and Modal for dynamic, serverless compute resources.",
      "Delivered a user-centric website for account management, subscription billing, and compute job payments, integrating Stripe for secure, automated transactions.",
      "Instituted comprehensive unit testing and CI/CD pipelines, driving code quality and enabling seamless automated deployment to development and production environments.",
    ],
  },
  {
    id: "aimdyn",
    role: "Research Engineer",
    org: "AIMdyn, Inc.",
    dates: "Oct. 2023 – Apr. 2025",
    startDate: "2023-10",
    endDate: "2025-04",
    bullets: [
      "Spearheaded development of data-driven solutions leveraging generative AI and deep learning to optimize forecasting, simulation, and analytic engine performance for strategic planning and discovery.",
      "Integrated scalable, reusable MLOps components (MLflow, CI/CD, containerization), expediting experimentation and deployment of machine learning models for simulation and COA validation.",
      "Orchestrated server cluster workflows and job scheduling systems, enabling high-throughput simulation and analytic engine operations for large-scale scenario exploration.",
      "Advanced the SCEPTER program by creating unscripted, goal-oriented agents that autonomously discover novel, relevant, and interpretable courses of action (COAs) in trusted military simulation environments.",
      "Devised and implemented algorithms to manage exponential growth of the global state-action space, enabling rapid exploration of large-scale military scenarios and achieving scenario exploration speeds up to 100,000x real-time.",
    ],
  },
  {
    id: "umass-gra",
    role: "Graduate Research Assistant",
    org: "UMass Lowell Energy & Combustion Research Laboratory",
    dates: "Jan. 2019 – Sep. 2023",
    startDate: "2019-01",
    endDate: "2023-09",
    bullets: [
      "Applied advanced machine learning and data engineering techniques for robust data preprocessing, modeling, and validation in alternative energy research projects.",
      "Leveraged optimization algorithms (including biologically-inspired methods) to fine-tune hyper-parameters in supervised and unsupervised learning workflows, boosting predictive model accuracy.",
      "Automated data preprocessing pipelines in Python, enhancing consistency, reproducibility, and accuracy for downstream statistical evaluation.",
      "Mentored research teams and provided technical leadership on software development, ensuring quality through code reviews, collaborative troubleshooting, and version control best practices (Git).",
    ],
  },
  {
    id: "valora",
    role: "Implementation/DevOps Engineer",
    org: "Valora Technologies",
    dates: "June 2018 – Jan. 2019",
    startDate: "2018-06",
    endDate: "2019-01",
    bullets: [
      "Engineered automated extraction workflows to convert complex legal, financial, and government documents into actionable data insights, improving client deliverables.",
      "Designed and optimized robust ETL pipelines, streamlining client document processing from intake to final data delivery and reducing turnaround time.",
      "Led onboarding and training for new Implementation/DevOps engineers, empowering teams to master advanced data mining, pipeline configuration, and DevOps best practices.",
    ],
  },
  {
    id: "umass-ura",
    role: "Undergraduate Research Assistant",
    org: "UMass Lowell Energy & Combustion Research Laboratory",
    dates: "June 2015 – May 2018",
    startDate: "2015-06",
    endDate: "2018-05",
    bullets: [
      "Developed advanced predictive models to accurately forecast chemical properties from molecular structures, driving innovation in QSAR/QSPR research.",
      "Designed and deployed high-performance neural network architectures for complex, multidimensional datasets, increasing model accuracy and reliability.",
      "Created and released open-source software packages for machine learning, feature extraction, and hyper-parameter optimization, enabling the research community with robust, reusable tools.",
      "Published impactful research in leading scientific journals and conferences, including Fuel, The Journal of Open Source Software, and the ASME Internal Combustion Engine Fall Conference.",
    ],
  },
];
