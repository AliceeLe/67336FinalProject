import * as Plot from "npm:@observablehq/plot";
import * as d3 from "npm:d3";

export function bike_type_plot(data, {width} = {}) {
    const total_slots = data.empty_slots + data.ebikes + data.normal_bikes;
    const tickValues = d3.range(0, total_slots + 1, Math.ceil(total_slots / 10)); 

    return Plot.plot({
        title: `Bike Type Availability at ${data.name}`,

        marks: [
            // CHALLENGE 7.2
            Plot.barY(
                [
                    { type: "E-bikes", value: data.ebikes },
                    { type: "Normal bikes", value: data.normal_bikes }
                ],
                { x: "type", y: "value", tip: true, fill: d => d.type }
            ),
                ],
        x: {
            // CHALLENGE 7.3
            label: "Bike Type",
            },
        y:{
            // CHALLENGE 7.4
            domain: [0, total_slots], 
            ticks: tickValues,        
            label: "Number of Bikes",
            grid: true,
            lineAnchor: "middle",
            anchor: "left",
            labelAnchor: "center"
        },
        color: {
            // CHALLENGE 7.5
            domain: ["E-bikes", "Normal bikes"],
            range: ["yellow", "blue"],
            legend: true
        }
    })
}