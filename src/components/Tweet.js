import React from 'react'
import "../styles/Tweet.css"

// We can deconstruct the props and use brackets to only get out the objs we need
function Tweets({ name, tweet, tweets, setTweets  }) {
    
    const deleteTweet = () => {
        // Filters out and leaves the tweets that are not being clicked
        setTweets(tweets.filter((state) => state.id !== tweet.id))
    }
    return (
        <div className="tweet">
            <h2 className="tweet__title"> {name}</h2>
            <h3>{ tweet.message}</h3>
            <button onClick={deleteTweet}>Delete</button>
            <button>Like</button>

        </div>
    )
}

export default Tweets
