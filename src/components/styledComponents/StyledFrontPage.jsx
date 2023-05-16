import styled from "styled-components";

const StyledFrontPage = styled.div`
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

  .front-page-h1{
    margin: 0;
    font-weight: 500;
    font-size: 3rem;
    text-align: left;
    color: #47b5ff;
  }

  @media only screen and (max-width: 990px) {
    // with phone number:
    // padding: 18.75rem 0 23.875rem 0;
    // margin-bottom: -20rem;
    // without phone number:
    padding: 18.75rem 0 19.125rem 0;
    margin-bottom: -16rem;
    height: initial;
    .front-page-h1 {
      text-align: center;
    }
  }
`;

export default StyledFrontPage;
