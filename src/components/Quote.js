import React from 'react'

function Quote(props) {
    
    if (Object.keys(props.currentQuote).length !== 0) {
    return(<div><h2 className="quote-header">Today's Quote</h2>
        <div className="stockQuote">
            <table>
                <thead></thead>
                <tbody>
                <tr>
                    <td>Symbol</td>
                    <td>{props.currentQuote["01. symbol"]}</td>
                </tr>
                <tr>
                    <td>Price</td>
                    <td>{props.currentQuote["05. price"]}</td>
                </tr>
                <tr>
                    <td>High</td>
                    <td>{props.currentQuote["03. high"]}</td>
                </tr>
                <tr>
                    <td>Low</td>
                    <td>{props.currentQuote["04. low"]}</td>
                </tr>
                </tbody>
            </table>
        </div>
        </div>
    )}
    else{
        return null;
    }
}

export default Quote;