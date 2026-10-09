import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Sum from "./Sum";
import Post from "./Post";
import { useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(10);
  console.log("App component rendered");

  const object = useMemo(() => {
    return {
      name: "John Doe",
      age: 30,
    };
  }, []);
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
        <Sum n={number} />
        <Post value={object} />
      </section>
    </>
  );
}

export default App;
