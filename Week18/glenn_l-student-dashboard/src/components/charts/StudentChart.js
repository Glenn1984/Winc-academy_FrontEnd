import React from "react";
import {
    VictoryBar,
    VictoryGroup,
    VictoryChart,
    VictoryAxis,
    VictoryZoomContainer,
    VictoryLine,
    VictoryLegend,
} from "victory";

const StudentChart = (props) => {
    // console.log("Studentchart props ", props);
    return (
        <>
            <VictoryChart
                domainPadding={{ x: 20 }}
                standalone={true}
                containerComponent={
                    <VictoryZoomContainer
                        zoomDimension="x"
                        zoomDomain={{x: [0, 30]}}
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
                <VictoryGroup
                    offset={8}
                >
                    <VictoryBar
                        barWidth={7}
                        style={
                            {
                                data: {
                                    fill: "rgb(0,61,182)",
                                },
                            }
                        }
                    />
                    <VictoryBar
                        barWidth={7}
                        style={
                            {
                                data: {
                                    fill: "rgb(177,77,28)",
                                },
                            }
                        }
                    />
                </VictoryGroup>
                <VictoryAxis
                    offsetX={10}
                    style={
                        {
                            tickLabels: {
                                padding: 20,
                                angle: -45,
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

export default StudentChart;
