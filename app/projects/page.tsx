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
            href="https://www.uml.edu/engineering/research/engineering-solutions/student-research.aspx"
            className="cv-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Project Starfish
          </a>
          {' '} - A smart, cost-effective and non-invasive prosthetic hand (UMass Lowell DifferenceMaker)
        </li>
      </ul>
    </div>
  );
}
