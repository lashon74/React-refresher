import React from 'react'
// Use uuid to give each tweet its onw unique id
import {v4 as uuidv4} from "uuid"

function CreateTweet({setTextInput, textInput, tweets, setTweets}) {
  
    
    // Functions that updates the h1 nelow with the new text input
    const userInputHandler = (e) => {
        setTextInput(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        // Use spread opperator to hold tweets and the new input for the new tweets use message to display the textinput and uuid will be assign to each tweet behind the scenes
        setTweets([...tweets, {  message: textInput, id: uuidv4() }]);
        setTextInput("")
}
    return (
        <form onSubmit={submitHandler}>
            {/* In order to ensure the form is connected give the value of the usetate to the form */}
            <textarea value={textInput} onChange={userInputHandler} cols="50" rows="5"></textarea>
            <button>Submit</button>
            {/* <h1 onClick={() => setTextInput("")}>{textInput}</h1> */}
        </form>
    )
}

export default CreateTweet
