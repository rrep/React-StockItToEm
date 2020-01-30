import React from 'react'
import NewsItem from './NewsItem'

function NewsFeed(props) {
    return(
        <div className="NewsFeed">
            {props.newsItems.length > 0?<h2>News Articles for {props.currentSearch}</h2>:null}
            {props.newsItems.map((item, i)=>
                <div>
                    <br/>
                    <div key={i}><NewsItem article={item}/>
                    </div>
                </div>
                )
            }
                    
            </div>
    )
}

export default NewsFeed;