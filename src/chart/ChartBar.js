//Import component and css
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Grid, Row, Col } from 'react-bootstrap';
import "../css/ChartBar.css";

//ChartBar component in arrow method
const ChartBar = (props) => {

    let barFillHeight = "0%";

    if(props.maxValue > 0)
    {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
    }

    return (
            <div className="chart-bar">
                <div className="chart-bar__inner">
                    <div className="chart-bar__fill" style={{height: barFillHeight, backgroundColor: "red"}}>
                    </div>
                </div>
                <div className="chart-bar__label">
                    {props.label}
                </div>
            </div>
    );

};

//Export component
export default ChartBar;