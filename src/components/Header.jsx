import StyledHeader from "../components/headerComponents/StyledHeader";
import StyledNav from "../components/headerComponents/StyledNav";
import StyledUl from "../components/headerComponents/StyledUl";
import StyledLink from "../components/headerComponents/StyledLink";
import StyledNavLink from "../components/headerComponents/StyledNavLink";
import StyledLi from "../components/headerComponents/StyledLi";
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
      <div className="header-content-wrapper">
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
            </StyledLi>
            <StyledLi>
              <StyledNavLink
                to={"/cv"}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                CV
              </StyledNavLink>
            </StyledLi>
            <StyledLi>
              <StyledNavLink
                to={"/projects"}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Prosjekter
              </StyledNavLink>
            </StyledLi>
            <StyledLi>
              <StyledNavLink
                to={"*"}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Kontakt
              </StyledNavLink>
            </StyledLi>
          </StyledUl>
        </StyledNav>
      </div>
    </StyledHeader>
  );
};

export default Header;
