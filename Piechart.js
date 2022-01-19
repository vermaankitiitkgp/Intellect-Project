import React from "react";
import ChartistGraph from "react-chartist";

const data = {
    series: [20, 10, 30, 40]
};

const options = {};

const type = "Pie";

export default function App() {
    return (
        <div className="App">
            <ChartistGraph data={data} options={options} type={type} />
        </div>
    );
}