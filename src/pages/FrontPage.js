import { FrontPageWrapper, FrontPageH1 } from "../components/styledFrontPage";

const FrontPage = () => {
  return (
    <FrontPageWrapper>
      <FrontPageH1>
        Hei! Mitt navn er Georg,
        <br />
        og jeg er en full stack
        <br />
        utvikler.
      </FrontPageH1>
    </FrontPageWrapper>
  );
};

export default FrontPage;
