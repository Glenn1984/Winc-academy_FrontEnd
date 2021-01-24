import React from "react";
import { useDispatch } from "react-redux";
import { sortData } from "../../actions/index";
import NavbarContainer from "./NavbarContainer";
import NavbarSortContainer from "./NavbarSortContainer";

const Navbar = (props) => {
    const dispatch = useDispatch();

    const hasSortOrder = (range, order) => {
        const sortOrder = {
            range,
            order
        };
        dispatch(sortData(sortOrder));
    };

    return (
        <nav className="navbar">
            <div className="navbar__namelist">
                <h3 className="navbar__title">Students: </h3>
                <ul className="navbar__list">
                    <NavbarContainer {...props}/>
                </ul>
            </div>
            <div className="navbar__sortby">
                <h3 className="navbar__title">Sort by:</h3>
                <NavbarSortContainer
                    sortOrder={hasSortOrder}
                />
            </div>
        </nav>
    );
};

export default Navbar;