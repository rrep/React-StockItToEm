import React from 'react';

function HistoryGraph(props) {
    function parseData(data){
        const dataArray = [];
        for (var i in data){
            dataArray.push({
                date: new Date(Object.keys(data)[0].replace(/-/g, '/')),
                value: Object.keys(data)[0]

            });
        }

        return dataArray;
    }
    return(
        <div>
            <svg className="line-chart"></svg>
        </div>
    )
}

export default HistoryGraph;