import SectionHeadline from "../components/SectionHeadline";
import Wrapper from "../components/Wrapper";
import {
  ProjectsAll,
  ProjectSingle,
  ProjectHeading,
  ProjectBox,
} from "../components/styledProjectsPage";

const ProjectsPage = () => {
  return (
    <Wrapper>
      <SectionHeadline>Prosjekter</SectionHeadline>
      <ProjectsAll>
        <ProjectSingle>
          <ProjectHeading>Caesar cipher solver</ProjectHeading>
          <ProjectBox></ProjectBox>
        </ProjectSingle>
        <ProjectSingle>
          <ProjectHeading>Pokédex</ProjectHeading>
          <ProjectBox></ProjectBox>
        </ProjectSingle>
        <ProjectSingle>
          <ProjectHeading>Prosjekt 3</ProjectHeading>
          <ProjectBox></ProjectBox>
        </ProjectSingle>
        <ProjectSingle>
          <ProjectHeading>Prosjekt 4</ProjectHeading>
          <ProjectBox></ProjectBox>
        </ProjectSingle>
      </ProjectsAll>
    </Wrapper>
  );
};

export default ProjectsPage;
