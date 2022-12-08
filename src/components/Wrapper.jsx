import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  margin-bottom: -6.5625rem;

  background-color: #dff6ff;
  color: #06283d;
  box-sizing: border-box;
  padding: 8.125rem 0 9.6875rem 0;
  text-align: left;
  display: flex;
  justify-content: center;

  .main-content-wrapper {
    width: 80%;
  }

  @media only screen and (max-width: 1315px) {
    .projects-wrapper > *,
    .main-content-wrapper a,
    .projects-wrapper div div div {
      display: flex;
      justify-content: center;
    }
  }

  @media only screen and (max-width: 990px) {
    padding: 18.75rem 0 23.875rem 0;
    margin-bottom: -20rem;
  }
`;

export default Wrapper;
