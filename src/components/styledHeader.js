import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

export const StyledHeader = styled.header`
  background-color: #06283d;
  color: #dff6ff;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledNav = styled.nav`
  width: 40.625rem;
  height: 3.125rem;
  display: flex;
  align-items: center;
  justify-content: right;
`;

export const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  width: 80%;
  display: flex;
  justify-content: space-around;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #dff6ff;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #dff6ff;
  &:hover {
    color: yellow;
    background-color: white;
  }
`;

export const StyledLi = styled.li`
  list-style: none;
  display: inline-block;
`;
