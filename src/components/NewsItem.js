import React, { useState } from 'react'

function NewsFeed(props) {
    
    return(
        <div className="NewsItem" >
            Title: {props.article.title}<br/>
            Author: {props.article.author}<br/>
        </div>
    )
}

export default NewsFeed;