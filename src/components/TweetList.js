import React from 'react'
import Tweet from './Tweet'

function TweetList({name, tweets, setName, setTweets }) {
    return (
        <div className="tweet-list">
            {tweets.map((tweet) => (
                <Tweet
                    key={tweet.id}
                    name={name}
                    setTweets={setTweets}
                    tweet={tweet}
                    tweets={tweets}
                />
            ))}
            {/* This button will change the setname from the beast to mr. amazing if the function has an arg add arrow function so it wont be involked */}
            {/* <button onClick={() => setName("Mr. Amazing")}>Click</button>*/}
        </div>
    )
}

export default TweetList
