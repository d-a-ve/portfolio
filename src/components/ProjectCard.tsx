type ProjectCardPropsType = {
  projectTitle: string;
  description: string;
  link: string;
  projectCover: string;
  technologies: string;
  githubRepo: string;
};

export default function ProjectCard({
  projectTitle,
  description,
  link,
  projectCover,
  technologies,
  githubRepo,
}: ProjectCardPropsType) {
  return (
    <div className="project-card">
      <div className="project-card-img">
        <img
          src={`../../assets/${projectCover}-cover-image.png`}
          alt={`${projectTitle} Image`}
          loading="lazy"
        />
      </div>
      <div className="project-data">
        <div className="project-heading">
          <h3>{projectTitle}</h3>
          <p>{technologies}</p>
        </div>

        <div className="project-description">
          <p>{description}</p>
        </div>

        <div className="project-link">
          <a href={link} target="_blank">
            Live Link
          </a>
          <a href={githubRepo} target="_blank">
            Github Repo
          </a>
        </div>
      </div>
    </div>
  );
}
