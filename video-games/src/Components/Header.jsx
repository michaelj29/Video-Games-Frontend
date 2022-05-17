import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, NavbarBrand } from "reactstrap";
import SearchBar from "./SearchBar";
import "./Header.css"
const Header = props => {
  return (
    <div>

      <nav className="navbar bg-light">
        <h3 className="header">Videogame Library</h3>
        <SearchBar search={props.search} />
        </nav>

    </div>
  );
};

export default Header;
