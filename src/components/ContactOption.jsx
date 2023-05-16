import LinkedInIcon from "../components/icons/LinkedInIcon";
import GitHubIcon from "../components/icons/GitHubIcon";

const ContactOption = ({ link, site }) => {
  return (
    <p>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="contact-website-name-link"
      >
        <span className="center-links">
          {site === "LinkedIn" && <LinkedInIcon></LinkedInIcon>}
          {site === "GitHub" && <GitHubIcon></GitHubIcon>}
          <span className="contact-website-name">{site}</span>
        </span>
      </a>
    </p>
  );
};

export default ContactOption;
