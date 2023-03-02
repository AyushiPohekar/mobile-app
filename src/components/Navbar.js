import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCartPlus,
  faLocation,
  faMicrophone,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import "./component.css";

const Navbar = () => {
  return (
    <div id="mainNavbar">
      <div className="navbarfirst">
        <FontAwesomeIcon icon={faLocation} />
        <input type="text" placeholder="Gorakhpur" className="navinput" />
        <FontAwesomeIcon icon={faBell} />
        <FontAwesomeIcon icon={faCartPlus} />
      </div>
      <div className="navbarsecond">
        <div className="search">
          <FontAwesomeIcon icon={faSearch} className="searchIcon" />
          <input
            type="text"
            placeholder="Search for Products"
            className="navsecondInput"
          />
        </div>
        <FontAwesomeIcon icon={faMicrophone} />
      </div>
    </div>
  );
};

export default Navbar;
