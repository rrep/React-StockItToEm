import React, { useState } from 'react'

function Quote(props) {
    
    if (Object.keys(props.currentQuote).length !== 0) {
    return(
        <div className="stockQuote">
            <br></br>
            {props.currentQuote["05. price"]}
        </div>
    )}
    else{
        return null;
    }
}

export default Quote;