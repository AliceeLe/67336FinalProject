import * as Plot from "npm:@observablehq/plot";
import * as d3 from "npm:d3";

export function station_demand_plot(network_data, station_data, {width} = {}) {
    return Plot.plot({
        title: `Station Demand in the ${network_data.name} Bike-Sharing Network`,
        marks: [
            // CHALLENGE 6.2
            Plot.barY(station_data, {x: "name", y: "empty_slots", sort: {x: "y"}, tip: true}),
        ],
        x: {
            // CHALLENGE 6.3
            label: "Station Name",
            tickRotate: -40,
            tickPadding: 5,
            fontSize: 6
            },
        y: {
            // CHALLENGE 6.4
            label: "Demand (by Empty Slots Available)",
            ticks: 24,
            fontSize: 6,
            lineAnchor: "middle",
            anchor: "left",
            labelAnchor: "center"

        },
        // CHALLENGE 6.5
        marginLeft: 40,
        width: 1000,
        height: 680,
        marginBottom: 150,
        style: {
            fontSize: "8px" 
        }
    });
}