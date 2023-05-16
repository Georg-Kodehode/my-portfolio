import styled from "styled-components";

const StyledAboutMePage = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;

  .about-me-text{
    height: inherit;
    width: 60%;
    box-sizing: border-box;
    font-size: 1.5rem;
    font-weight: 500;
    padding: 0 30px 0 0;
  }

  .about-me-paragraph{
    text-align: left;
    margin-top: 0;
  }

  .self-portrait{
    min-width: 20rem;
    max-width: 25rem;
    align-self: center;
    margin: 0 0 0 30px;
    display: inline-block;
    box-sizing: border-box;
    border: 5px solid #ffffff;
    border-radius: 15px;
  }

  @media only screen and (max-width: 990px) {
    flex-direction: column;
    .self-portrait {
      margin: 0;
      max-width: 20rem;
    }
    .about-me-text{
      width: 100%;
      padding: 0;
    }
  }
`;

export default StyledAboutMePage;
