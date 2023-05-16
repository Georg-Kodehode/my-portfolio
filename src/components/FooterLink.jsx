import MailIcon from "./icons/MailIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import GitHubIcon from "./icons/GitHubIcon";

const FooterLink = ({ site, link, lastLink, siteUrl }) => {
  if (site === "mail") {
    return (
      <>
        <p className="align-footer">
          &nbsp;
          <MailIcon></MailIcon>
          &nbsp;
          <a href={link} className="mail-link">
            {siteUrl}
          </a>
          &nbsp;
        </p>
        <p className="contact-separator">|</p>
      </>
    );
  }
  return (
    <>
      <p className="align-footer">
        &nbsp;
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="contact-website-name-link"
        >
          {site === "LinkedIn" && <LinkedInIcon></LinkedInIcon>}
          {site === "GitHub" && <GitHubIcon></GitHubIcon>}
          <span className="contact-website-name">{site}</span>
        </a>
        &nbsp;
      </p>
      {!lastLink && <p className="contact-separator">|</p>}
    </>
  );
};

export default FooterLink;
