import SectionHeadline from "../components/styledComponents/SectionHeadline";
import Wrapper from "../components/styledComponents/Wrapper";
import StyledAboutMePage from "../components/styledComponents/StyledAboutMePage";
import Push from "../components/Push";
import AboutMeData from "../data/AboutMeData";

const paragraphs = AboutMeData.map(({ key, paragraph }) => {
  return (
    <p key={key} className="about-me-paragraph">
      {paragraph}
    </p>
  );
});

const AboutMePage = () => {
  return (
    <Wrapper>
      <div className="main-content-wrapper">
        <SectionHeadline>Om meg</SectionHeadline>
        <StyledAboutMePage>
          <div className="about-me-text">{paragraphs}</div>
          <img
            className="self-portrait"
            alt="self portrait"
            src={require("../images/self_portrait.PNG")}
          />
        </StyledAboutMePage>
      </div>
      <Push></Push>
    </Wrapper>
  );
};

export default AboutMePage;
