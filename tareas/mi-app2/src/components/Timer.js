import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
      console.log('intervalo: ', interval);
    }
    console.log('segundos: ', seconds);
   
    return () => clearInterval(interval);
  }, [isActive]);

  const toggleTimer = () => setIsActive(!isActive);
  const resetTimer = () => setSeconds(0);

  return (
    <div className="container">
      <h1>Timer: {seconds} segundos</h1>
      <button onClick={toggleTimer}>{isActive ? "Detener" : "Iniciar"}</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Timer;
