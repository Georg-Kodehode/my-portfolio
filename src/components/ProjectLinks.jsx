import StyledLink from "./styledComponents/StyledLink";
import FigmaIcon from "./icons/FigmaIcon";
import GitHubIcon from "./icons/GitHubIcon";
import VisitIcon from "./icons/VisitIcon";

function ProjectLinks(props) {
  const { githubLink, siteLink, figmaLink } = props?.props;
  return (
    <>
      <StyledLink href={githubLink ? githubLink : figmaLink} target="_blank">
        {figmaLink && <FigmaIcon></FigmaIcon>}
        {githubLink && <GitHubIcon></GitHubIcon>}
        &nbsp;&nbsp;
        {figmaLink && "Figma"}
        {githubLink && "GitHub"}
      </StyledLink>
      <StyledLink href={siteLink} target="_blank">
        <VisitIcon></VisitIcon>
        &nbsp;&nbsp;Besøk
      </StyledLink>
    </>
  );
}

export default ProjectLinks;
