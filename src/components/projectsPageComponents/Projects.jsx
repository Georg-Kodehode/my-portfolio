import ProjectSingle from "./ProjectSingle";
import ProjectHeading from "./ProjectHeading";
import ProjectBox from "./ProjectBox";
import ProjectLinksWrapper from "./ProjectLinksWrapper";
import ProjectLinksComponent from "../../components/ProjectLinksComponent";
import ProjectIframe from "./ProjectIframe";
import ProjectData from "./ProjectData";

let projects = ProjectData.map((project) => {
  return (
    <ProjectSingle>
      <ProjectHeading href={project.siteLink} target="_blank">
        {project.name}
      </ProjectHeading>
      <ProjectBox>
        <ProjectIframe
          src={project.siteLink}
          title={project.name}
          width="100%"
          height="100%"
        ></ProjectIframe>
      </ProjectBox>
      <ProjectLinksWrapper>
        <ProjectLinksComponent
          props={{
            githubLink: project.githubLink,
            siteLink: project.siteLink,
          }}
        ></ProjectLinksComponent>
      </ProjectLinksWrapper>
    </ProjectSingle>
  );
});

console.log(projects);

const Projects = () => {
  return projects;
};

export default Projects;
