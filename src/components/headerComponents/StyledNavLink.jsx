import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #dff6ff;
  &:hover,
  &:focus {
    color: #47b5ff;
  }
  &:focus {
    text-decoration: underline;
  }
`;

export default StyledNavLink;
