import { useState, useMemo } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(100000000);
  console.log("App component rendered");

  function calculateSumOfNeturalNumbers(n) {
    console.log("Calculating sum of first", n, "natural numbers");
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
  const total = useMemo(() => calculateSumOfNeturalNumbers(number), [number]);
  return (
    <>
      <section id="center">
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>

        <button
          type="button"
          className="counter"
          onClick={() => setNumber((number) => number + 1000)}
        >
          Number is {number}
        </button>
        <h4>
          Sum of first {number} natural numbers is {total}
        </h4>
      </section>
    </>
  );
}

export default App;
