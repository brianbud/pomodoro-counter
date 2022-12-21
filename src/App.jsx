import React from "react"
import './App.css'


const days = ["Mon", "Tues", "Wed", "Th", "Fri", "Sat", "Sun"];


  export default function App() {
    return (
      <div className="App">
        <div className="window">
          <h2>Tomato Counter</h2>
          {days.map((day) => (
            <div key={day} className="tomato-box">
              <h3>{day}</h3>
              <div className="tomato-day-box"></div>
            </div>
          ))}
          <div className="buttons-container">
            <div className="button">-</div>
            <div className="button">+</div>
          </div>
        </div>
      </div>
    );
  }