import FrontPageWrapper from "../components/frontPageComponents/FrontPageWrapper";
import FrontPageH1 from "../components/frontPageComponents/FrontPageH1";

const FrontPage = () => {
  return (
    <FrontPageWrapper>
      <div className="main-content-wrapper">
        <FrontPageH1>
          Hei! Mitt navn er Georg,
          <br />
          og jeg er en full stack
          <br />
          utvikler.
        </FrontPageH1>
      </div>
    </FrontPageWrapper>
  );
};

export default FrontPage;
