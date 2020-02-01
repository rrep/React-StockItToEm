import React, { useEffect } from 'react';
import * as d3 from "d3";

function HistoryGraph(props) {

    useEffect(
        () => {
            drawChart(parseData(props.timeSeries))
        }, 
        [ props.timeSeries ],
        );

    //take in data object and process it to make an array for the line chart
    function parseData(data){
        const dataArray = [];
        for (var i in data){
            const obj = data[i];
            dataArray.push({
                date: new Date(i.replace(/-/g, '/')),
                value: obj["4. close"]
            });
        }
        return dataArray;
    }

    //drawchart
    function drawChart(parsedData){


        //define width and height of the chart (draw space)
        const svgWidth = 600, svgHeight = 400;
        const margin = { top: 20, right: 20, bottom:30, left:50}
        const width = svgWidth - margin.left - margin.right;
        const height = svgHeight - margin.top - margin.bottom;

        //select the svg element, set width and height attributes
        const svg = d3.select('svg')
                .attr('width', svgWidth)
                .attr('height', svgHeight)
                .attr("class","line-chart")

        //add a group tag and transform
        const g = svg.append('g')
                    .attr("transform", "translate(" + margin.left + "," + margin.top +")");

        //create scale for x axis
        const x = d3.scaleTime()
                    .rangeRound([0, width]);

        //create scale for y axis
        const y = d3.scaleLinear()
                    .rangeRound([height, 0]);

        //draw lines
        const line = d3.line()
                    .x(function(d) {return x(d.date)})
                    .y(function(d) {return y(d.value)})
        
        //look through min and max values and create x-axis domain
        x.domain(d3.extent(parsedData, function(d){ return d.date}));

        //look through min and max values and create y-axis domain
        y.domain(d3.extent(parsedData, function(d){ return d.value}));

        g.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x).scale(x).ticks(d3.timeWeek.every(2)))
            .select(".domain")
            .remove();

        g.append("g")
            .call(d3.axisLeft(y))
            .append("text")
            .attr("fill", "#000")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", "0.71em")
            .attr("text-anchor", "end")
            .text("Price ($)");

        g.append("path")
            .datum(parsedData)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")
            .attr("stroke-width", 1.5)
            .attr("d", line);
    
            console.log("full draw chart method is run");
        }
    //actual component
    return(
        <div>
            <svg></svg>
        </div>
    )
}

export default HistoryGraph;