import styled from "styled-components";

const SkillsPageWrapper = styled.div`
  min-height: 39.5rem;
  width: 100%;
  box-sizing: border-box;
  margin: 0 0 0.5625rem 0;
  background-color: #06283d;
  color: #47b5ff;
  padding: 2.5rem;
  border: 5px solid #47b5ff;
  @media only screen and (max-width: 990px) {
    padding: 1rem;
    p {
      margin: 0 0 0 1.5rem;
    }
    overflow: scroll;
  }
`;

export default SkillsPageWrapper;
