import styled from "styled-components";

const StyledNav = styled.nav`
  width: 40.625rem;
  min-height: 3.125rem;
  display: flex;
  align-items: center;
  justify-content: right;

  .navlink {
    text-decoration: none;
    color: #dff6ff;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-styling: border-box;
    &:hover,
    &:focus {
      color: #47b5ff;
    }
  }
`;

export default StyledNav;
