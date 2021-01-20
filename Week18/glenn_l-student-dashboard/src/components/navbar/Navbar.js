import React from "react";
import NavbarContainer from "./NavbarContainer";

const Navbar = (props) => {
    return (
        <nav className="navbar">
            <div className="navbar__wrapper">
                <h3 className="navbar__title">Students: </h3>
                <ul className="navbar__list">
                    <NavbarContainer {...props}/>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;