import styled from "styled-components";

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  width: 70%;
  height: 100%;
  min-width: 18.75rem;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 990px) {
    align-items: center;
    padding-bottom: 0.625rem;
  }
`;

export default StyledUl;
