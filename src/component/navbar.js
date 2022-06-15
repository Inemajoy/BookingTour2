import React from "react";
import logo from "../assets/images/logotour.jpg";
import "./navbar.css";
const Nav=()=>{
return(
    <div className="nav">
        <img src={logo} alt="bookingtour" className="logotour"></img>
        <div className="navigation-link">
    <ul className="nav-links">
        <li><a href="Home" className="nav-link">Home</a></li>
        <li><a href="About" className="nav-link">About-us</a></li>
        <li><a href="Contact-us" className="nav-link">Contact-us</a></li>
        <li><a href="" className="nav-link">Gallery</a></li>
        <li><a href="" className="nav-link btn-link">Sign-in</a></li>
        <li><a href="Tours" className="nav-link nav-btn">Tours</a></li>
        </ul>
        </div>
    </div>
);
};
export default Nav;