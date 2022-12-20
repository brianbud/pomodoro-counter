import React from "react"
import './App.css'

export default function App() {

  const [counter, setCounter] = React.useState(10)

function decrement(){
  setCounter(prevCount=> prevCount - 1) 
}

  return (
    <div className="App">
      <div className="window">
        <h2>Tomato Counter</h2>
        <div className="tomato-box">
          <h1>{counter}</h1>
        </div>
        <div className="buttons-container">
          <div className="button" onClick={decrement}>-</div>
          <div className="button">+</div>
        </div>
      </div>
    </div>
  );
}
