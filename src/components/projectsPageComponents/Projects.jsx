import ProjectLinks from "../ProjectLinks";
import ProjectData from "./ProjectData";

let projects = ProjectData.map((project) => {
  return (
    <div className="project-single" key={project.key}>
      <a className="project-heading" href={project.siteLink} target="_blank" rel="noreferrer">
        {project.name}
      </a>
      <div className="project-box">
        <a href={project.siteLink} target="_blank" rel="noreferrer">
          <img
            src={project.image}
            alt={project.name}
            width="100%"
            height="100%"
          />
        </a>
      </div>
      <p className="project-description">{project.description}</p>
      <div className="project-links-wrapper">
        <ProjectLinks
          props={{
            figmaLink: project.figmaLink,
            githubLink: project.githubLink,
            siteLink: project.siteLink,
          }}
        ></ProjectLinks>
      </div>
    </div>
  );
});

const Projects = () => {
  return projects;
};

export default Projects;
