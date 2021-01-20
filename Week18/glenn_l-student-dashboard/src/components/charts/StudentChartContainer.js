import React from "react";
import StudentChart from "./StudentChart";

const StudentChartContainer = (props) => {
    console.log("StudentChartContainer ", props);
    // console.log(props.match.url); //* namen url
    // props.match.url === "/" ? props.dataState : props.dataState.filter(student => console.log(student))
    let matchingUrl;

    if (props.match.url === "/") {
        matchingUrl = props.dataState.map(student => student);
    } else {
        matchingUrl = props.dataState.filter(({ Name }) => Name === props.match.params.name);
    };
    // console.log("matching url ", matchingUrl);

    const listOfUniqueExercises = [...new Set(matchingUrl.map(student => student.Exercise))]
    console.log("list of unique exercises ", listOfUniqueExercises);

    console.log(props.sortState.slicing.weeks);


    return (
        <>
            <StudentChart {...props}/>
        </>
    );
};

export default StudentChartContainer;
