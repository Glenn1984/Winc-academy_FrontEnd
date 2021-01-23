import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";

const NavbarContainer = (props) => {
    const uniqueStudentNames = [...new Set(props.dataState.map(student => student.Name))];

    const listOfStudents = uniqueStudentNames.map(name => {
        return (
            <li
                className="navbar__listitem"
                key={nanoid(2)}
            >
                <Link
                    key={nanoid(2)}
                    to={name}
                    className="navbar__link"
                >
                    {name}
                </Link>
            </li>
        );
    });

    const listOfAllStudents = () => {
        return (
            <li
                className="navbar__listitem"
                key={nanoid(2)}
            >
                <Link
                    key={nanoid(2)}
                    to="/"
                    className="navbar__link--all"
                >
                    All Students
                </Link>
            </li>
        );
    };

    return (
        <>
            {listOfAllStudents()}
            {listOfStudents}
        </>
    );
};

export default NavbarContainer;