import SectionHeadline from "../components/SectionHeadline";
import Wrapper from "../components/Wrapper";
import StyledProjects from "../components/projectsPageComponents/StyledProjects";
import Projects from "../components/projectsPageComponents/Projects";
import Push from "../components/Push";

const ProjectsPage = () => {
  return (
    <Wrapper>
      <div className="main-content-wrapper projects-wrapper">
        <SectionHeadline>Prosjekter</SectionHeadline>
        <StyledProjects>
          <Projects></Projects>
        </StyledProjects>
      </div>
      <Push></Push>
    </Wrapper>
  );
};

export default ProjectsPage;
