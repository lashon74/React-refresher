import {useState, useEffect} from "react"
import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";
import "./styles/App.css"

function App() {
/* Normal java script can be writen here the obj i create will be used to pass down as props props can only be passed down from one level up so i this obj will go to the tweetlist component then get deconstucted and be passed down to the tweets coponent
  //Usestate is is to update the ui you pass in a variableand what it will be changed to "Lashon hudson" is the current state setname is the state it changes to this can also be passed down as props*/
  const [tweets, setTweets] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [name, setName] = useState("Lashon hudson");
  const sayHelloHandler = (e) => {
  setName("The Beast")
  console.log(name);
  }

  // Useefeect is used when a component if frist rendered on the screenor the state changes
  useEffect(() => {
    console.log("We ran a function");
},[tweets])
  return (
    <div className="app">
      <h1 className="header__title">Twitter thingy</h1>
      <CreateTweet
        textInput={textInput}
        setTextInput={setTextInput}
        tweets={tweets}
        setTweets={setTweets} />
      {/* These input will be used to display props on tweet compoenet */}
      <TweetList name={name} tweets={tweets} setName={setName} setTweets={setTweets}/>
     
      <button onClick={sayHelloHandler}>Click</button>
    </div>
  );
}

export default App;
