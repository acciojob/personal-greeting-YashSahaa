
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [inputState,setInputState] = useState("");
  return (
    <div>
        <label for="name">Enter Your Name :</label>
        <br/>
        <input value={inputState} onChange={(e) =>{
          setInputState(e.target.value);
        }} id="name"/>
        <p>Hello {inputState}!</p>
    </div>
  )
}

export default App
