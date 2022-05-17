import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, NavbarBrand, NavItem, NavLink } from "reactstrap";
import SearchBar from "./SearchBar";

const Header = props => {
  return (
    <div>
      <Nav>
      <NavbarBrand> Videogame Library</NavbarBrand>
        <SearchBar search={props.search} />
      </Nav>
    </div>
  );
};

export default Header;
