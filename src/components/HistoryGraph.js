import React from 'react';

function HistoryGraph(props) {

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
    return(
        <div>
            {console.log(parseData(props.timeSeries))}
            <svg className="line-chart"></svg>
        </div>
    )
}

export default HistoryGraph;