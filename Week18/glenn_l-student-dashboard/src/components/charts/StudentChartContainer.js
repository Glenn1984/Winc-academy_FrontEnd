import React from "react";
import StudentBarChart from "./StudentBarChart";
import StudentLineChart from "./StudentLineChart";

const StudentChartContainer = (props) => {
    let matchingUrl;

    if (props.match.url === "/") {
        matchingUrl = props.dataState.map(student => student);
    } else {
        matchingUrl = props.dataState.filter(({ Name }) => Name === props.match.params.name);
    };

    const listOfUniqueExercises = [...new Set(matchingUrl.map(student => student.Exercise))];
        
    
    const getAverageScores = (exercise, category) => {

        const filteredByExercise = matchingUrl
            .filter(student => student.Exercise === exercise);
            
            const averageScores = filteredByExercise
                .map(student => student[category])
                .reduce((acc, cur) => acc + cur) / filteredByExercise.length;
            
            return averageScores;
        };
    
        const hasExercisesWithAverageScores = listOfUniqueExercises.map(exercise => {
            return {
                Exercise: exercise,
                Difficulty: getAverageScores(exercise, "Difficulty"),
                Amusing: getAverageScores(exercise, "Amusing")
            };
        });
    
    // console.log(props.sortState.slicing.weeks);
    // if (!props.sortState.slicing.weeks.week1) {
    //     listOfUniqueExercises = listOfUniqueExercises.filter(Exercise => !Exercise.includes("W1"));
    // };

    const getSortOrder = (hasExercisesWithAverageScores, range, order) => {
        order === "ascending" ?
            hasExercisesWithAverageScores.sort((a, b) => (a[range] > b[range] ? 1 : -1)) :
            hasExercisesWithAverageScores.sort((a, b) => (a[range] < b[range] ? 1 : -1));
    };

    getSortOrder(hasExercisesWithAverageScores, props.sortState.sort.range, props.sortState.sort.order)

    return (
        <>
            <div className="main__styling">
                <div className="main__studentbarchart">
                    <StudentBarChart
                        AverageScores={hasExercisesWithAverageScores}
                    />
                </div>
            </div>
                <div className="main__horizontalbar"></div>
            <div className="main__styling">
                <div className="main__studentlinechart">
                    <StudentLineChart
                        AverageScores={hasExercisesWithAverageScores}
                    />
                </div>
            </div>
        </>
    );
};

export default StudentChartContainer;
