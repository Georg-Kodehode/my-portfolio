import styled from "styled-components";

const StyledLi = styled.li`
  list-style: none;
  display: inline-block;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;

  @media only screen and (max-width: 990px) {
    height: 48px;
    width: unset;
    a {
      width: 100%;
      text-align: center;
      justify-content: center;
    }
  }
`;

export default StyledLi;
