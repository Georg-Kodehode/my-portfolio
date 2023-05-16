import StyledHeader from "./styledComponents/StyledHeader";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <StyledHeader>
      <div className="header-content-wrapper">
        <Link to={"*"} className="styled-link">
          <div className="logo">G</div>
        </Link>
        <nav className="styled-nav">
          <ul className="styled-ul">
            <NavItem to="about-me">Om meg</NavItem>
            <NavItem to="cv">CV</NavItem>
            <NavItem to="projects">Prosjekter</NavItem>
            <NavItem to="contact">Kontakt</NavItem>
          </ul>
        </nav>
      </div>
    </StyledHeader>
  );
};

export default Header;
