import React from "react";

import StudentChartContainer from "../charts/StudentChartContainer";
// import Card from "../card/Card";

const Main = (props) => {
    // console.log("main props", props);
    return (
        <main className="main">
            <div className="main__wrapper">
                <StudentChartContainer {...props} />
                <div className="main__horizontalbar"></div>
                {/* <Card {...props} /> */}
                <div className="main__verticalbar"></div>
                {/* <div className="main__chart">
                </div> */}
                {/* <span className="main__horizontalbar"></span> */}
                {/* <div className="main__chart"></div> */}
                {/* <span className="main__verticalbar"></span> */}
                {/* <div className="main__chart"></div> */}
            </div>
        </main>
    );
};

export default Main;