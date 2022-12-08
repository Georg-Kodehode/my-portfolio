import styled from "styled-components";

const FrontPageWrapper = styled.div`
  width: 100%;
  height: 40rem;
  min-height: 100vh;
  margin-bottom: -6.5625rem;
  background-color: #06283d;
  box-sizing: border-box;
  padding: 13.125rem 0 9.6875rem 0;
  display: flex;
  justify-content: center;

  .main-content-wrapper {
    width: 80%;
  }

  @media only screen and (max-width: 990px) {
    padding: 18.75rem 0 23.875rem 0;
    margin-bottom: -20rem;
    height: initial;
    h1 {
      text-align: center;
    }
  }
`;

export default FrontPageWrapper;
