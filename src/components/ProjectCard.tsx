type ProjectCardPropsType = {
  index: number;
  projectTitle: string;
  description: string;
  link: string;
  projectCover: string;
  technologies: string;
  githubRepo?: string;
};

export default function ProjectCard({
  projectTitle,
  description,
  link,
  projectCover,
  technologies,
  githubRepo,
}: ProjectCardPropsType) {
  const stack = technologies
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  return (
    <article className="project-card">
      <div className="project-card-img">
        <img
          src={`/assets/${projectCover}-cover-image.png`}
          alt={`${projectTitle} Image`}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="project-data">
        <div className="project-heading">
          <h3>{projectTitle}</h3>
        </div>

        <div className="project-description">
          <p>{description}</p>
        </div>

        <div className="project-actions">
          <ul className="project-stack" aria-label="Tech stack">
            {stack.map((tech) => (
              <li key={`${projectTitle}-${tech}`}>{tech}</li>
            ))}
          </ul>

          <div className="project-link">
          <a
            className="project-link--primary"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            <span>Visit live</span>
            <span className="project-link__arrow" aria-hidden="true">
              &#8599;
            </span>
          </a>
          {githubRepo ? (
            <a
              className="project-link--secondary"
              href={githubRepo}
              target="_blank"
              rel="noreferrer"
            >
              <span>Source</span>
              <span className="project-link__arrow" aria-hidden="true">
                &#8599;
              </span>
            </a>
          ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
