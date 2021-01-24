import React from "react";
import {
    VictoryChart,
    VictoryAxis,
    VictoryZoomContainer,
    VictoryLine,
    VictoryLegend,
} from "victory";
import theme from "../../styles/theme";
import animation from "../../styles/animation";

const StudentLineChart = (props) => {
    const primaryColor = "rgb(0, 61, 182)";
    const secondaryColor = "rgb(177,77,28)";
    const styleDifficulty = {
        data: {
            stroke: primaryColor,
        },
    };

    const styleAmusing = {
        data: {
            stroke: secondaryColor,
        },
    };
    return (
        <>
            <VictoryChart
                domainPadding={{ x: 20 }}
                standalone={true}
                theme={theme}
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
                                fill: primaryColor,
                            }
                        },
                        {
                            name: "Amusing",
                            symbol: {
                                fill: secondaryColor,
                            }
                        },
                    ]}
                />
                <VictoryLine
                    style={styleDifficulty}
                    animate={animation.difficulty}
                    data={props.AverageScores}
                    x="Exercise"
                    y="Difficulty"
                />
                <VictoryLine
                    style={styleAmusing}
                    animate={animation.amusing}
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

export default StudentLineChart;