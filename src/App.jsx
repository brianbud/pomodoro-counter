import React from "react"
import './App.css'

export default function App() {

  const [counter, setCounter] = React.useState('')


  const tomatoImages = []

  const tomatoString = tomatoImages.join('')

  function decrement(){
  setCounter(prevCount=> prevCount.slice(0,-2)) 
  }

  function increment(){
  setCounter(prevCount => prevCount + "🍅")
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
          <div className="button" onClick={increment}>+</div>
        </div>
      </div>
    </div>
  );
}
