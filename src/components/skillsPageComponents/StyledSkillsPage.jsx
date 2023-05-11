import styled from "styled-components";

const StyledSkillsPage = styled.div`
  min-height: 39.5rem;
  box-sizing: border-box;
  margin: 0 0 0.5625rem 0;
  background-color: #06283d;
  color: #47b5ff;
  padding: 2.5rem;
  border: 5px solid #47b5ff;
  
  .skill-list{
    text-align: left;
    margin: 0 0 0 3.125rem;
  }

  .skills-category{
    text-align: left;
    margin: 0.5625rem 0;
  }

  @media only screen and (max-width: 990px) {
    padding: 1rem;
    p {
      margin: 0 0 0 1.5rem;
    }
    overflow: scroll;
  }
  @media only screen and (max-width: 445px) {
    h1 {
      font-size: 2rem;
    }
  }
`;

export default StyledSkillsPage;
