import StyledHeader from "../components/headerComponents/StyledHeader";
import StyledNav from "../components/headerComponents/StyledNav";
import StyledUl from "../components/headerComponents/StyledUl";
import StyledLink from "../components/headerComponents/StyledLink";
import StyledLi from "../components/headerComponents/StyledLi";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";

let activeStyle = {
  color: "#47b5ff",
  borderBottom: "3px solid #47b5ff",
  marginBottom: "-3px",
  textDecoration: "none",
  height: "100%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxStyling: "border-box",
};

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
              <NavLink
                to="about-me"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="navlink"
              >
                Om meg
              </NavLink>
              {/* <StyledLink to={"/about-me"}>Om meg</StyledLink> */}
            </StyledLi>
            <StyledLi>
              <NavLink
                to="cv"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="navlink"
              >
                CV
              </NavLink>
            </StyledLi>
            <StyledLi>
              <NavLink
                to="projects"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="navlink"
              >
                Prosjekter
              </NavLink>
            </StyledLi>
            <StyledLi>
              <NavLink
                to={"contact"}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="navlink"
              >
                Kontakt
              </NavLink>
            </StyledLi>
          </StyledUl>
        </StyledNav>
      </div>
    </StyledHeader>
  );
};

export default Header;
