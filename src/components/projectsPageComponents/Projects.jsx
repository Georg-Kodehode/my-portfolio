import ProjectSingle from "./ProjectSingle";
import ProjectHeading from "./ProjectHeading";
import ProjectBox from "./ProjectBox";
import ProjectLinksWrapper from "./ProjectLinksWrapper";
import ProjectLinksComponent from "../../components/ProjectLinksComponent";
import ProjectData from "./ProjectData";
import ProjectDescription from "./ProjectDescription";

let projects = ProjectData.map((project) => {
  return (
    <ProjectSingle key={project.key}>
      <ProjectHeading href={project.siteLink} target="_blank" rel="noreferrer">
        {project.name}
      </ProjectHeading>
      <ProjectBox className="project-box">
        <a href={project.siteLink} target="_blank" rel="noreferrer">
          <img
            src={project.image}
            alt={project.name}
            width="100%"
            height="100%"
          />
        </a>
      </ProjectBox>
      <ProjectDescription>{project.description}</ProjectDescription>
      <ProjectLinksWrapper>
        <ProjectLinksComponent
          props={{
            figmaLink: project.figmaLink,
            githubLink: project.githubLink,
            siteLink: project.siteLink,
          }}
        ></ProjectLinksComponent>
      </ProjectLinksWrapper>
    </ProjectSingle>
  );
});

const Projects = () => {
  return projects;
};

export default Projects;
