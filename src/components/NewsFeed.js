import React from 'react'
import NewsItem from './NewsItem'

function NewsFeed(props) {
    return(
        <div className="NewsFeed">
            <h2>News Articles</h2>
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