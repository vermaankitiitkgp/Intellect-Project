import React from "react";
import ChartistGraph from "react-chartist";

const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    series: [[1, 2, 4, 8, 6, 10, 17, 8, 2, 3, 5, 19]]
};

const options = {
    high: 10,
    low: 0,
    axisX: {
        labelInterpolationFnc(value, index) {
            return index % 2 === 0 ? value : null;
        }
    }
};

const type = "Bar";

export default function App() {
    return (
        <div className="App">
            <ChartistGraph data={data} options={options} type={type} />
        </div>
    );
}