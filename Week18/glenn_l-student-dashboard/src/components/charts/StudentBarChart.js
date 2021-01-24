import React from "react";
import {
    VictoryBar,
    VictoryGroup,
    VictoryChart,
    VictoryAxis,
    VictoryZoomContainer,
    VictoryLegend,
} from "victory";
import theme from "../../styles/theme";
import animation from "../../styles/animation";


const StudentBarChart = (props) => {
    const primaryColor = "rgb(0, 61, 182)";
    const secondaryColor = "rgb(177,77,28)";
    const styleDifficulty = {
        data: {
            fill: primaryColor,
        },
    };

    const styleAmusing = {
        data: {
            fill: secondaryColor,
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
                        zoomDomain={{x: [0, 30]}}
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
                <VictoryGroup
                    offset={6}
                >
                    <VictoryBar
                        barWidth={7}
                        style={styleDifficulty}
                        animate={animation.difficulty}
                        data={props.AverageScores}
                        x="Exercise"
                        y="Difficulty"
                    />
                    <VictoryBar
                        barWidth={7}
                        style={styleAmusing}
                        animate={animation.amusing}
                        data={props.AverageScores}
                        x="Exercise"
                        y="Amusing"
                    />
                </VictoryGroup>
                <VictoryAxis
                    offsetX={10}
                    style={
                        {
                            tickLabels: {
                                padding: 35,
                                angle: 45,
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

export default StudentBarChart;
