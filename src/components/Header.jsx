import React from "react";
import {NavLink as Link}  from "react-router-dom";


function Header() {

    return (
        <nav>
            <ul>
                <img className="logo" src="./images/logo.png" alt="Logo"></img>
                <Link id="ul_elements" to="/" >Home</Link>
                <Link id="ul_elements" to="/About">About</Link>
                <Link id="ul_elements" to="/Webnovel">Webnovel</Link>
                <Link id="ul_elements" to="/ContactMe">Contact</Link>
            </ul>
        </nav>
    )

}

export default Header