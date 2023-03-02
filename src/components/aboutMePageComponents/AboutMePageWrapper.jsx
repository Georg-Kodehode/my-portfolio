import styled from "styled-components";

const AboutMePageWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 990px) {
    flex-direction: column;
    img {
      margin: 0;
      max-width: 20rem;
    }
    div {
      width: 100%;
      padding: 0;
    }
  }
`;

export default AboutMePageWrapper;
