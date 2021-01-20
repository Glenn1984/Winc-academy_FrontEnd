import React from "react";

// import PercentTab from "./PercentTab";
// import HardnessTab from "./HardnessTab";
// import AmusingTab from "./AmusingTab";
// import TimeTab from "./TimeTab";
import Figure from "./Figure";

const Header = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <Figure />
                <h1 className="header__title">Student dashboard</h1>
            </div>
        </header>
    );
};

export default Header;