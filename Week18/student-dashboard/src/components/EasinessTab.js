import React from "react";
import personData from "../state/Winc Eindopdracht – Studenten Mock data – Frontend Cursus Opdrachten";

const EasinessTab = () => {
    const allStudentsData = personData.map(studentsData => {
        return studentsData.exercises.map(student => [student.exercise, student.easiness]);
    });
    // console.log("allStudentsData ", allStudentsData); //? 10 studenten x 56 opdrachten - array in array ["opdracht", cijfer]


    let array = [];
    const exactValue = (value => array.push(value));
    // console.log("array ", array); //? 10x cijfer van eerste opdracht "SCRUM". [4,1,1,2, etc..]



    allStudentsData.forEach(student => {
        // console.log("voor elke student ", student); //? van elke student alle 56 opdrachten. ["SCRUM", 1]
        student.forEach(opdracht => {
            // console.log("voor elke opdracht ", opdracht); //? ["SCRUM", 1]
            // console.log(`${opdracht[0]} - ${opdracht[1]}`);
            if (opdracht[0] === "SCRUM") {
                exactValue(opdracht[1]); // 20 / 2
            } else if (opdracht[0] === "W1D1-1") {
                // exactValue(opdracht[1]); // 30 / 3
            }
        });
    });

    const uitkomst = array.reduce((acc, cur) => acc + cur);
    console.log("uitkomst ", uitkomst);

    const gemiddeldCijfer = (value => value / allStudentsData.length);
    gemiddeldCijfer(uitkomst);
    console.log(gemiddeldCijfer(uitkomst));
    
    

    return <>
        <h3>demo text</h3>
        <span className="fa-stack" style={{ "verticalAlign": "top" }}>
            <i className="fas fa-circle fa-stack-2x"></i>
            <i className="fas fa-chart-bar fa-stack-1x fa-lg fa-inverse"></i>
        </span>
    </>
};

export default EasinessTab;