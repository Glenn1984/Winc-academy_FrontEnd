import React from "react";
import StudentChartContainer from "../charts/StudentChartContainer";
import Card from "../card/Card";

const Main = (props) => {
    const matchUrl = props.match.url;
    
    return (
        <main className="main">
            <div className="main__wrapper">
                <StudentChartContainer {...props} />
                <div className="main__horizontalbar"></div>
                    {matchUrl === "/" ?
                    console.log("Klik op een naam en bewonder de kaart.") :
                    <Card {...props} />}
            </div>
        </main>
    );
};

export default Main;