import { useState } from "react";
import "./App.css";

function App() {
  const [word, setWord] = useState('');
  const [definition , setDefinition ] = useState(null)

  const dictionary = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const handleSearch=()=>{
  const wordPresent =  dictionary.filter((item)=>{return item.word.toLowerCase() === word.toLowerCase()})
    console.log(wordPresent);

    if(wordPresent.length > 0){
      let ans = wordPresent[0].meaning;
      setDefinition(ans);
    }else{
      setDefinition("Word not found in the dictionary.")
    }

  }




  return <>
  <h1>Dictionary App</h1>
  
  <input type="text" onChange={(e)=>setWord(e.target.value)}></input>
  <button onClick={handleSearch}>Search</button>
  <h3>Definition:</h3> <p>{definition}</p>
  
  
  
  
  </>;
}

export default App;
