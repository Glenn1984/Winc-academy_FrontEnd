import React from "react";

import StudentChartContainer from "../charts/StudentChartContainer";

const Main = (props) => {
    console.log("main props", props);
    return (
        <main className="main">
            <div className="main__wrapper">
                <div className="main__styling">
                    <div className="main__studentchart">
                        <StudentChartContainer {...props}/>
                    </div>
                </div>
                {/* <span className="main__horizontalbar"></span> */}
                {/* <span className="main__verticalbar"></span> */}
                {/* <div className="main__chart"> */}
                    {/* <StudentPie /> */}
                {/* </div> */}
                {/* <span className="main__horizontalbar"></span> */}
                {/* <div className="main__chart"></div> */}
                {/* <span className="main__verticalbar"></span> */}
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