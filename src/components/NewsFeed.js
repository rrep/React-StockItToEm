import React, { useState } from 'react'
import NewsItem from './NewsItem'

function NewsFeed(props) {
    return(
        <div className="NewsFeed">
            
            {props.newsItems.map((item, i)=>
                <div key={i}><NewsItem article={item}/></div>
                )
            }
                    
            </div>
    )
}

export default NewsFeed;