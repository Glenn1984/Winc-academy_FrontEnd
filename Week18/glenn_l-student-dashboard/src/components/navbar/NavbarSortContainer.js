import React from "react";

const NavbarSortContainer = (props) => {
    const getSortOrder = (e) => {
        const sortOrder = e.target.value;
        
        switch (sortOrder) {
            case "exerciseAscending":
                props.sortOrder("Exercise", "ascending")
                break;
            case "exerciseDescending":
                props.sortOrder("Exercise", "descending")
                break;
            case "difficultyAscending":
                props.sortOrder("Difficulty", "ascending")
                break;
            case "difficultyDescending":
                props.sortOrder("Difficulty", "descending")
                break;
            case "amusingAscending":
                props.sortOrder("Amusing", "ascending")
                break;
            case "amusingDescending":
                props.sortOrder("Amusing", "descending")
                break;
            default:
                
        }
    };

    return (
        <>
            <select
                className="navbar__select"
                defaultValue="Exercises a-z"
                name="sort"
                onChange={getSortOrder}
            >
                <optgroup
                    label="Exercise"
                    className="navbar__group"
                >
                    <option
                        value="exerciseAscending"
                        className="navbar__option"
                    >
                        Exercise a-z
                    </option>
                    <option
                        value="exerciseDescending"
                        className="navbar__option"
                    >
                        Exercise z-a
                    </option>
                </optgroup>
                <optgroup
                    label="Difficulty"
                    className="navbar__group"
                >
                    <option
                        value="difficultyAscending"
                        className="navbar__option"
                    >
                        Difficulty low-high
                    </option>
                    <option
                        value="difficultyDescending"
                        className="navbar__option"
                    >
                        Difficulty high-low
                    </option>
                </optgroup>
                <optgroup
                    label="Amusing"
                    className="navbar__group"
                >
                    <option
                        value="amusingAscending"
                        className="navbar__option"
                    >
                        Amusing low-high
                    </option>
                    <option
                        value="amusingDescending"
                        className="navbar__option"
                    >
                        Amusing high-low
                    </option>
                </optgroup>
            </select>
        </>
    );
};

export default NavbarSortContainer;
