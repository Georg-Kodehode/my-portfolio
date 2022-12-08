import SectionHeadline from "../components/SectionHeadline";
import Wrapper from "../components/Wrapper";
import ProjectsAll from "../components/projectsPageComponents/ProjectsAll";
import Projects from "../components/projectsPageComponents/Projects";
import Push from "../components/Push";

const ProjectsPage = () => {
  return (
    <Wrapper>
      <div className="main-content-wrapper projects-wrapper">
        <SectionHeadline>Prosjekter</SectionHeadline>
        <ProjectsAll>
          <Projects></Projects>
        </ProjectsAll>
      </div>
      <Push></Push>
    </Wrapper>
  );
};

export default ProjectsPage;
