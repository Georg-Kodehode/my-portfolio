import SectionHeadline from "../components/SectionHeadline";
import Wrapper from "../components/Wrapper";
import Push from "../components/Push";
import ContactPageWrapper from "../components/contactPageComponents/ContactPageWrapper";

const ContactPage = () => {
  return (
    <Wrapper>
      <div className="main-content-wrapper projects-wrapper">
        <SectionHeadline>Contact</SectionHeadline>
        <ContactPageWrapper>
          <div className="contact-info-div"></div>
        </ContactPageWrapper>
      </div>
      <Push></Push>
    </Wrapper>
  );
};

export default ContactPage;
