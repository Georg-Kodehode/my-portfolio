import SectionHeadline from "../components/styledComponents/SectionHeadline";
import Wrapper from "../components/styledComponents/Wrapper";
import StyledProjectsPage from "../components/styledComponents/StyledProjectsPage";
import Projects from "../components/Projects";
import Push from "../components/Push";

const ProjectsPage = () => {
  return (
    <Wrapper>
      <div className="main-content-wrapper projects-wrapper">
        <SectionHeadline>Prosjekter</SectionHeadline>
        <StyledProjectsPage>
          <Projects></Projects>
        </StyledProjectsPage>
      </div>
      <Push></Push>
    </Wrapper>
  );
};

export default ProjectsPage;
