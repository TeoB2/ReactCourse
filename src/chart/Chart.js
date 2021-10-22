//Import component and css
import React from "react";
import ChartBar from "./ChartBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Grid, Row, Col } from 'react-bootstrap';
import "../css/Chart.css";

//Chart component in arrow method
const Chart = (props) => {
console.log(props.dataPoints);
    const dataPointValues = props.dataPoints.map(dataPoint => parseFloat(dataPoint.value));
    const totalMaximum = Math.max.apply(Math, dataPointValues);

    //Map dataPoints array and pass parameters value at ChartBar component
    return <div className="chart">{props.dataPoints.map(dataPoint => <ChartBar key={dataPoint.key} value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label} />)}</div>;

};

//Export component
export default Chart;