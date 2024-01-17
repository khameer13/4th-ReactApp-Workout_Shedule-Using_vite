import React, { useState } from 'react';
import './App.css';


function App() {

    const [buttonTexts, setButtonTexts] = useState({
        btn1: '▶',
        btn2: '▶',
        btn3: '▶',
        btn4: '▶',
        btn5: '▶',
        btn6: '▶',
      });
    
      const [isButtonDisabled, setIsButtonDisabled] = useState(false);
      
      const handle = (n,buttonId) => {
        const updatedButtonTexts = { ...buttonTexts };
        updatedButtonTexts[buttonId] = '⏸';
        setButtonTexts(updatedButtonTexts);
        setIsButtonDisabled(true);
        const workoutinterval = setInterval(() => {
          if (n >= 0) {
            const startcounting = new SpeechSynthesisUtterance(n--);
            startcounting.pitch = 1;
            startcounting.rate = 1;
            startcounting.volume = 1;
            speechSynthesis.speak(startcounting);
          }
          else {
            const stopworkout = new SpeechSynthesisUtterance(`Rest for ${30} seconds`);
            stopworkout.pitch = 1;
            stopworkout.rate = 1;
            stopworkout.volume = 1;
            speechSynthesis.speak(stopworkout)
            updatedButtonTexts[buttonId] = '▶';
            setButtonTexts(updatedButtonTexts);
            setIsButtonDisabled(false);
            clearInterval(workoutinterval);
          }
        }, 1000)
      }

      
  return (
   <>
    <div className="section1">
        <h1 id='title'>Personal Training Shedule </h1>
        {/* <a href="/compnents/diet.jsx">khameer</a> */}
      </div>
      <div className="section2">
        <div className="cards">
          <p className="workouts"> WorkOut 1</p>
          <h2>JUMPING JACKS</h2>
          <button id="btn1" onClick={() => handle(30,'btn1')} disabled={isButtonDisabled}>{buttonTexts.btn1}</button>
        </div>
        <div className="cards">
          <p className="workouts"> WorkOut 2</p>
          <h2>HIGH KNEES</h2>
          <button id="btn2" onClick={() => handle(30,'btn2')} disabled={isButtonDisabled}>{buttonTexts.btn2}</button>
        </div>
        <div className="cards">
          <p className="workouts"> WorkOut 3</p>
          <h2>RUNNING LUNGES</h2>
          <button id="btn3" onClick={() => handle(30,'btn3')} disabled={isButtonDisabled}>{buttonTexts.btn3}</button>
        </div>
        <div className="cards">
          <p className="workouts"> WorkOut 4</p>
          <h2>SKIPPING</h2>
          <button id="btn4" onClick={() => handle(30,'btn4')} disabled={isButtonDisabled}>{buttonTexts.btn4}</button>
        </div>
        <div className="cards">
          <p className="workouts"> WorkOut 5</p>
          <h2> SPRINTING</h2>
          <button id="btn5" onClick={() => handle(30,'btn5')} disabled={isButtonDisabled}>{buttonTexts.btn5}</button>
        </div>
        <div className="cards">
          <p className="workouts"> WorkOut 6</p>
          <h2> BUTT KICKS</h2>
          <button id="btn5" onClick={() => handle(30,'btn6')} disabled={isButtonDisabled}>{buttonTexts.btn6}</button>
        </div>
      </div>
   </>
  )
}

export default App
