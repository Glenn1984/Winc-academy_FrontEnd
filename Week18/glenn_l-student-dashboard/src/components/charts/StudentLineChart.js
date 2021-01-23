import React from "react";
import {
    VictoryChart,
    VictoryAxis,
    VictoryZoomContainer,
    VictoryLine,
    VictoryLegend,
} from "victory";

const StudentLineChart = (props) => {
    return (
        <>
            <VictoryChart
                domainPadding={{ x: 20 }}
                standalone={true}
                containerComponent={
                    <VictoryZoomContainer
                        zoomDimension="x"
                        zoomDomain={{x: [1, 6]}}
                    />
                }
            >
                <VictoryLegend
                    data={[
                        {
                            name: "Difficulty",
                            symbol: {
                                fill: "rgb(0,61,182)",
                            }
                        },
                        {
                            name: "Amusing",
                            symbol: {
                                fill: "rgb(177,77,28)",
                            }
                        },
                    ]}
                />
                <VictoryLine
                    style={
                        {
                            data: {
                                stroke: "rgb(0,61,182)",
                            },
                        }
                    }
                    data={props.AverageScores}
                    x="Exercise"
                    y="Difficulty"
                />
                <VictoryLine
                    style={
                        {
                            data: {
                                stroke: "rgb(177,77,28)",
                            },
                        }
                    }
                    data={props.AverageScores}
                    x="Exercise"
                    y="Amusing"
                />
                <VictoryAxis
                    offsetX={10}
                    style={
                        {
                            tickLabels: {
                                padding: 20,
                                angle: -15,
                            },
                        }
                    }
                />
                <VictoryAxis
                    dependentAxis
                    crossAxis
                    domain={[0, 5]}
                    width={400}
                    height={400}
                />
            </VictoryChart>
        </>
    );
};

export default StudentLineChart;