import FrontPageWrapper from "../components/frontPageComponents/FrontPageWrapper";
import FrontPageH1 from "../components/frontPageComponents/FrontPageH1";
import Push from "../components/Push";

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
      <Push></Push>
    </FrontPageWrapper>
  );
};

export default FrontPage;
