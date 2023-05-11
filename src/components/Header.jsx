import StyledHeader from "../components/headerComponents/StyledHeader";
import Logo from "./Logo";
import { NavLink, Link } from "react-router-dom";

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
        <Link to={"*"} className="styled-link">
          <Logo>G</Logo>
        </Link>
        <nav className="styled-nav">
          <ul className="styled-ul">
            <li className="styled-li">
              <NavLink
                to="about-me"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="navlink"
              >
                Om meg
              </NavLink>
            </li>
            <li className="styled-li">
              <NavLink
                to="cv"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="navlink"
              >
                CV
              </NavLink>
            </li>
            <li className="styled-li">
              <NavLink
                to="projects"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="navlink"
              >
                Prosjekter
              </NavLink>
            </li>
            <li className="styled-li">
              <NavLink
                to={"contact"}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="navlink"
              >
                Kontakt
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </StyledHeader>
  );
};

export default Header;
