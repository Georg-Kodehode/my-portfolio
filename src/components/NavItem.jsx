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

const NavItem = ({to, children})=>{
    return(
      <li className="styled-li">
        <NavLink
          to={to}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="navlink"
        >
          {children}
        </NavLink>
      </li>
    )
}

export default NavItem