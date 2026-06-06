import SectionIntro from "../../utils/SectionIntro";
import ProjectCard from "../../components/ProjectCard";
import "./Projects.css";
import { projects } from "../../data/projects";

export default function Projects() {
  const allProjects = projects.map((project, index) => (
    <ProjectCard
      key={project.title}
      index={index}
      projectTitle={project.title}
      description={project.description}
      link={project.link}
      projectCover={project.projectCover}
      technologies={project.technologiesUsed}
      githubRepo={project.githubRepoLink}
    />
  ));

  return (
    <section className="section projects" id="projects">
      <div className="projects-container grid">
        <SectionIntro num="03">Selected projects</SectionIntro>

        <div className="projects-hero">
          <h2 className="projects-title reveal">Projects</h2>

          <p className="projects-aside reveal reveal-delay-1">
            A curated set of products and experiments that show how I turn
            complex requirements into smooth, reliable, user-friendly web
            applications across frontend and backend.
          </p>
        </div>

        <div className="projects-details">{allProjects}</div>
      </div>
    </section>
  );
}
