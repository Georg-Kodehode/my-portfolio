import StyledFrontPage from "../components/frontPageComponents/StyledFrontPage";
import Push from "../components/Push";

const FrontPage = () => {
  return (
    <StyledFrontPage>
      <div className="main-content-wrapper">
        <h1 className="front-page-h1">
          Hei! Mitt navn er Georg,
          <br />
          og jeg er en full stack
          <br />
          utvikler.
        </h1>
      </div>
      <Push></Push>
    </StyledFrontPage>
  );
};

export default FrontPage;
