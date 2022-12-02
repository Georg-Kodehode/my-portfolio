import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNavLink = styled(NavLink)`
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
    border-bottom: 3px solid #47b5ff;
    margin-bottom: -3px;
  }
`;

export default StyledNavLink;
