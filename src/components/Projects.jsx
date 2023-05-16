import ProjectLinks from "./ProjectLinks";
import ProjectData from "../data/ProjectData";

let projects = ProjectData.map((project) => {
  const { key, siteLink, name, image, description, figmaLink, githubLink } =
    project;
  return (
    <div className="project-single" key={key}>
      <a
        className="project-heading"
        href={siteLink}
        target="_blank"
        rel="noreferrer"
      >
        {name}
      </a>
      <div className="project-box">
        <a href={siteLink} target="_blank" rel="noreferrer">
          <img src={image} alt={name} width="100%" height="100%" />
        </a>
      </div>
      <p className="project-description">{description}</p>
      <div className="project-links-wrapper">
        <ProjectLinks
          props={{
            figmaLink: figmaLink,
            githubLink: githubLink,
            siteLink: siteLink,
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
