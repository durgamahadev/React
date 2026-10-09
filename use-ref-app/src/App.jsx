import { useState, useRef } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

let timerId;
function App() {
  const [timer, setTimer] = useState(0);
  const timerRef = useRef(null);

  function startTimer() {
    if (timerRef.current) return;

    timerRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 100);
  }

  function stopTimer() {
    clearInterval(timerRef.current);
  }

  function resetTimer() {
    clearInterval(timerRef.current);
    setTimer(0);
  }

  return (
    <>
      <section>
        <p>{timer}</p>

        <button type="button" className="counter" onClick={startTimer}>
          Start
        </button>
        <button type="button" className="counter" onClick={stopTimer}>
          Stop
        </button>
        <button type="button" className="counter" onClick={resetTimer}>
          Reset
        </button>
      </section>
    </>
  );
}

export default App;
