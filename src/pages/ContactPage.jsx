import SectionHeadline from "../components/styledComponents/SectionHeadline";
import Wrapper from "../components/styledComponents/Wrapper";
import Push from "../components/Push";
import StyledContactPage from "../components/styledComponents/StyledContactPage";
import ContactOption from "../components/ContactOption";

const ContactPage = () => {
  return (
    <Wrapper>
      <div className="main-content-wrapper projects-wrapper">
        <SectionHeadline id="contact-headline">Kontakt</SectionHeadline>
        <StyledContactPage>
          <div className="contact-info-div">
            <p>E-post: georg.kodehode@gmail.com</p>
            {/* <p>Mobil: 555 55 555</p> */}
            <div className="contact-links-wrapper">
              <ContactOption
                link="https://www.linkedin.com/in/georg-stava-9171a248/"
                site="LinkedIn"
              ></ContactOption>
              <ContactOption
                link="https://github.com/Georg-Kodehode"
                site="GitHub"
              ></ContactOption>
            </div>
          </div>
        </StyledContactPage>
      </div>
      <Push></Push>
    </Wrapper>
  );
};

export default ContactPage;
