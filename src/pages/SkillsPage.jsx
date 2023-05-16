import Wrapper from "../components/styledComponents/Wrapper";
import SectionHeadline from "../components/styledComponents/SectionHeadline";
import StyledSkillsPage from "../components/styledComponents/StyledSkillsPage";
import StyledLink from "../components/styledComponents/StyledLink";
import VisitIcon from "../components/icons/VisitIcon";
import Push from "../components/Push";
import SkillsData from "../data/SkillsData";
import cv from "../documents/CV_Georg_Stava.pdf";

const skills = SkillsData.map((data) => {
  return (
    <div key={data.key}>
      <h3 className="skills-category">{data.skillsCategory}</h3>
      <p className="skill-list">{data.skillList}</p>
    </div>
  );
});

const SkillsPage = () => {
  return (
    <Wrapper>
      <div className="main-content-wrapper">
        <StyledSkillsPage>
          <SectionHeadline>Kompetanse</SectionHeadline>
          {skills}
        </StyledSkillsPage>
        <StyledLink href={cv} target={"_blank"}>
          <VisitIcon></VisitIcon>
          &nbsp;&nbsp;CV
        </StyledLink>
      </div>
      <Push></Push>
    </Wrapper>
  );
};

export default SkillsPage;
