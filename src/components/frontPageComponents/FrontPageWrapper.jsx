import styled from "styled-components";

const FrontPageWrapper = styled.div`
  width: 100%;
  height: 40rem;
  background-color: #06283d;
  box-sizing: border-box;
  padding: 13.125rem 0 8.125rem 0;
  display: flex;
  justify-content: center;

  .main-content-wrapper {
    width: 80%;
  }

  @media only screen and (max-width: 990px) {
    //300px = 18.75rem
    padding-top: 18.75rem;
    height: initial;
  }
`;

export default FrontPageWrapper;
