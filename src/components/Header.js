import {
  StyledHeader,
  StyledNav,
  StyledUl,
  StyledLink,
  StyledNavLink,
  StyledLi,
} from "./styledHeader";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";

let activeStyle = {
  textDecoration: "none",
  color: "blue",
};

let activeClassName = "underline";

const Header = () => {
  return (
    <StyledHeader>
      <StyledLink to={"*"}>
        <Logo>G</Logo>
      </StyledLink>
      <StyledNav>
        <StyledUl>
          <StyledLi>
            <StyledNavLink
              to="about-me"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Om meg
            </StyledNavLink>
            {/* <StyledLink to={"/about-me"}>Om meg</StyledLink> */}
            {/* <NavLink
              to="about-me"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Om meg
            </NavLink> */}
          </StyledLi>
          <StyledLi>
            <StyledLink to={"/cv"}>CV</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to={"/projects"}>Prosjekter</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to={"*"}>Kontakt</StyledLink>
          </StyledLi>
        </StyledUl>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
