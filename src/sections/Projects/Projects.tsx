import { useState } from "react";
import SectionIntro from "../../utils/SectionIntro";
import ProjectCard from "../../components/ProjectCard";
import Button from "../../utils/Button";
import "./Projects.css";
import { projects } from "../../../myData";

export default function Projects() {
  const [projectAge, setProjectAge] = useState({
    value: "oldest",
  });

  const projectsData = [...projects];

  const projectDisplay =
    projectAge.value === "oldest" ? projectsData : projectsData.reverse();

  const allProjects = projectDisplay.map((project) => (
    <ProjectCard
      key={project.id}
      projectTitle={project.title}
      description={project.description}
      link={project.link}
      projectCover={project.projectCover}
      technologies={project.technologiesUsed}
      githubRepo={project.githubRepoLink}
    />
  ));

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setProjectAge((prevAge) => ({ ...prevAge, value: e.target.value }));
  }

  return (
    <section className="section projects" id="projects">
      <div className="projects-container grid">
        <SectionIntro>What I have built</SectionIntro>

        <div>
          <h2>My Projects</h2>

          <form>
            <select
              className="projects-age-select"
              value={projectAge.value}
              onChange={handleChange}
            >
              <option value="oldest">Oldest to Newest</option>
              <option value="newest">Newest to Oldest</option>
            </select>
          </form>

          <div className="projects-details">{allProjects}</div>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button email={true} link="#" linkText="Contact Me" />
        </div>
      </div>
    </section>
  );
}
