import StyledFooter from "./styledComponents/StyledFooter";
import FooterLink from "./FooterLink";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <div className="footer-content-wrapper">
        <p>&copy; Georg Stava - {currentYear}</p>
        <div className="contact-wrapper">
          <FooterLink
            site="mail"
            siteUrl="georg.kodehode@gmail.com"
            link={"mailto:georg.kodehode@gmail.com"}
          ></FooterLink>
          <FooterLink
            site="LinkedIn"
            link={"https://www.linkedin.com/in/georg-stava-9171a248/"}
          ></FooterLink>
          <FooterLink
            site="GitHub"
            link={"https://github.com/Georg-Kodehode"}
            lastLink={true}
          ></FooterLink>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
