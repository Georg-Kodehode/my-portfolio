import StyledHeader from "../components/headerComponents/StyledHeader";
import StyledNav from "../components/headerComponents/StyledNav";
import StyledUl from "../components/headerComponents/StyledUl";
import StyledLink from "../components/headerComponents/StyledLink";
import StyledNavLink from "../components/headerComponents/StyledNavLink";
import StyledLi from "../components/headerComponents/StyledLi";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";

let activeStyle = {
  // textDecoration: "none",
  // color: "blue",
  textDecoration: "none",
  color: "#dff6ff",
  height: "100%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxStyling: "border-box",

  // &:hover,
  // &:focus {
  //   color: #47b5ff;
  //   border-bottom: 3px solid #47b5ff;
  //   margin-bottom: -3px;
  // }
};

let activeClassName = "underline";
// StyledNavLink gjør at NavLink ikke fungerer, må endre StyledNavLink til Navlink og gjøre noen andre endringer
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
                to="cv"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                CV
              </StyledNavLink>
            </StyledLi>
            <StyledLi>
              <StyledNavLink
                to="projects"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Prosjekter
              </StyledNavLink>
            </StyledLi>
            <StyledLi>
              <StyledNavLink
                to={"contact"}
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
