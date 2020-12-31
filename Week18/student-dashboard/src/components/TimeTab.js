import React from 'react';
import Clock from 'react-live-clock';

const TimeTab = () => (
    <>
        <h3>
            <Clock
                format="HH:mm:ss"
                interval={1000}
                ticking={true}
            />
        </h3>
        <span className="fa-stack" style={{ "verticalAlign": "top"}}>
            <i className="fas fa-circle fa-stack-2x"></i>
            <i className="fas fa-chart-line fa-stack-1x fa-lg fa-inverse"></i>
        </span>
    </>
);

export default TimeTab;