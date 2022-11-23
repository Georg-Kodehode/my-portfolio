import SectionHeadline from "../components/SectionHeadline";
import Wrapper from "../components/Wrapper";
import ProjectsAll from "../components/projectsPageComponents/ProjectsAll";
import ProjectSingle from "../components/projectsPageComponents/ProjectSingle";
import ProjectHeading from "../components/projectsPageComponents/ProjectHeading";
import ProjectBox from "../components/projectsPageComponents/ProjectBox";

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
          <ProjectHeading>Color scheme generator</ProjectHeading>
          <ProjectBox></ProjectBox>
        </ProjectSingle>
        <ProjectSingle>
          <ProjectHeading>Movie watchlist</ProjectHeading>
          <ProjectBox></ProjectBox>
        </ProjectSingle>
        <ProjectSingle>
          <ProjectHeading>Parallax site</ProjectHeading>
          <ProjectBox></ProjectBox>
        </ProjectSingle>
        <ProjectSingle>
          <ProjectHeading>Password generator</ProjectHeading>
          <ProjectBox></ProjectBox>
        </ProjectSingle>
        <ProjectSingle>
          <ProjectHeading>Pokédex</ProjectHeading>
          <ProjectBox></ProjectBox>
        </ProjectSingle>
        <ProjectSingle>
          <ProjectHeading>Solar system site</ProjectHeading>
          <ProjectBox></ProjectBox>
        </ProjectSingle>
      </ProjectsAll>
    </Wrapper>
  );
};

export default ProjectsPage;
