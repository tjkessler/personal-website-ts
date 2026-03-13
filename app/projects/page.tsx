export default function Projects() {
  return (
    <div>
      <style>{`
        .projects-list {
          list-style: disc inside;
          padding-left: 0;
        }
        .projects-list li {
          margin-bottom: 1rem;
          text-indent: -1.0em;
          padding-left: 1.0em;
        }
      `}</style>
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      <ul className="projects-list mb-12">
        <li>
          <a
            href="https://cognichem.com"
            className="cv-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cognitive Chemistry Labs
          </a>
          {' '} - Cognitive Chemistry Labs makes advanced computational chemistry and drug discovery tools accessible to academia and small and mid-sized research companies. We provide affordable, transparent, and scalable AI tools to accelerate molecular research and the development of new solutions.
        </li>
        <li>
          <a
            href="https://www.darpa.mil/research/programs/scepter-strategic-chaos"
            className="cv-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            SCEPTER: Strategic Chaos for Enhanced Resilience (DARPA)
          </a>
          {' '} - DARPA program developing AI-driven analytic engines to generate and validate novel military strategies, enabling rapid exploration of complex scenarios and discovery of new courses of action using goal-oriented agents and advanced model abstraction.
        </li>
        <li>
          <a
            href="https://www.linkedin.com/posts/symbotic_at-symbotic-we-just-closed-the-first-symbotic-activity-6399302319023886336-9l0j/"
            className="cv-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Symbotic Utility Bot Competition
          </a>
          {' '} - The inaugural Symbotic Utility Bot Competition brought together college teams from the greater Boston area to tackle a real-world robotics challenge in collaboration with Symbotic engineers. The University of Massachusetts Lowell team won 1st prize, with Worcester Polytechnic Institute (WPI) and University of New Hampshire placing 2nd and 3rd, respectively.
        </li>
        <li>
          <a
            href="https://www.uml.edu/engineering/research/engineering-solutions/student-research.aspx"
            className="cv-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Project Starfish
          </a>
          {' '} - Inspired by the regenerative abilities of starfish, our multidisciplinary team designed and built a low-cost, 3D-printed prosthetic hand to help level the field for people with disabilities. The prototype uses forearm muscle sensors, a Raspberry Pi for signal processing, and motors to control finger movement. Project Starfish won first prize in the 2016 UMass Lowell Francis College of Engineering Prototyping Competition, and the Innovative Technology Solution award at the 2017 UMass Lowell DifferenceMaker 50K Idea Challenge.
        </li>
      </ul>
        <h2 className="text-2xl font-bold mb-6">Side projects</h2>
        <ul className="projects-list mb-12">
          <li>
            <a
              href="https://github.com/tjkessler/historical-figure-chatbot"
              className="cv-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Historical figure chatbot
            </a>
            {' '} - A full-stack app to chat with AI personas of historical figures. FastAPI backend, React frontend, SQLite DB, and support for custom personas. Modern UI and conversation history.
          </li>
          <li>
            <a
              href="https://github.com/tjkessler/llm-fine-tuning"
              className="cv-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              LLM fine-tuning
            </a>
            {' '} - Fine-tuning and testing language models (BERT, GPT-2) on open-access journal articles, with scripts for data prep, model training, and a web app for interactive demos.
          </li>
          <li>
            <a
              href="https://github.com/tjkessler/rag-demo"
              className="cv-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              RAG system demo
            </a>
            {' '} - A demo Retrieval-Augmented Generation (RAG) project with a FastAPI backend (ChromaDB, GPT-2) and a React frontend for document ingestion and question answering.
          </li>
        </ul>
    </div>
  );
}
