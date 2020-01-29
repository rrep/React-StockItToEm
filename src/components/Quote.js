import React, { useState } from 'react'

function Quote(props) {

    return(
        <div className="Quote">
            {props.currentQuote!= null? props.currentQuote["05. price"]:null}
        </div>

    )
}

export default Quote;