import { assign } from "lodash";

const grey = "#D7DDE8";
const lightgrey = "rgb(215, 221, 232)";

//! Typography
const sansSerif = "'Inter', 'Seravek', sans-serif";
const letterSpacing = "normal";
const fontSize = 12;

//! Layout
const padding = 7;
const baseProps = {
    width: 1200,
    height: 230,
    padding: 50,
};

//! Label
const baseLabelStyles = {
    fontFamily: sansSerif,
    fontSize,
    letterSpacing,
    padding,
    fill: grey,
    stroke: "transparent",
    strokeWidth: 0,
};

const centeredLabelStyles = assign({ textAnchor: "middle" }, baseLabelStyles);

//! Stroke
const strokeDasharray = "1, 5";
const strokeLinecap = "round";
const strokeLinejoin = "round";

const theme = {
    axis:
        assign({
        style: {
            axis: {
                fill: "transparent",
                stroke: grey,
                strokeWidth: 2,
                strokeLinecap,
                strokeLinejoin
            },
            axisLabel:
                assign({}, centeredLabelStyles, {
                    padding,
                    stroke: "transparent"
                }),
            grid: {
                stroke: lightgrey,
                strokeDasharray,
                strokeLinecap,
                strokeLinejoin,
                pointerEvents: "painted"
            },
            ticks: {
                fill: "transparent",
                size: 7,
                stroke: grey,
                strokeWidth: 1,
                strokeLinecap,
                strokeLinejoin
            },
            tickLabels: assign({}, baseLabelStyles, {
                fill: grey,
            })
        }
    },
    baseProps
),
    bar:
    assign(
        {
        style: {
            data: {
                padding,
                strokeWidth: 0
            },
            labels: baseLabelStyles
            }
        },
        baseProps
    ),
    chart: baseProps,
    legend: {
        x: 1000,
        y: 0,
        gutter: 20,
        orientation: "horizontal",
        titleOrientation: "top",
        style: {
            data: {
                type: "star",
            },
            labels: baseLabelStyles,
            title: assign({}, baseLabelStyles, { padding: 5 })
        }
    },
    line: assign(
        {
            style: {
                data: {
                    fill: "transparent",
                    opacity: 1,
                    strokeWidth: 3
                },
                labels: baseLabelStyles
            }
        },
        baseProps
    ),
};

export default theme;