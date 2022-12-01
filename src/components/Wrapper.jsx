import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  background-color: #dff6ff;
  color: #06283d;
  box-sizing: border-box;
  padding: 8.125rem 0;
  text-align: left;
  display: flex;
  justify-content: center;

  .main-content-wrapper {
    width: 80%;
  }

  @media only screen and (max-width: 1275px) {
    .projects-wrapper > *,
    .main-content-wrapper a,
    .projects-wrapper div div div {
      //background-color: lightblue;
      display: flex;
      justify-content: center;
    }
  }
`;

export default Wrapper;
