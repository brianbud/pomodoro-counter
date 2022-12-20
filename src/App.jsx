import React from "react"
import './App.css'
import TomatoBox from "./TomatoBox"
import ButtonContainer from "./ButtonContainer"


export default function App() {

  const [counter, setCounter] = React.useState('')


  const tomatoImages = []

  const tomatoString = tomatoImages.join('')

  return (
    <div className="App">
      <div className="window">
        <h2>Tomato Counter</h2>
        <TomatoBox counter={counter}/>
        <ButtonContainer counter={counter} setCounter={setCounter}/>
      </div>
    </div>
  );
}
