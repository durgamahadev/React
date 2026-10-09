import { useState, useCallback } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Sum from "./Sum";

function App() {
  const [count, setCount] = useState(0);

  /**
   * when we have a funtion that is passed as a prop to a child component, it will be recreated on every render of the parent component.
   * This means that even if the child component is wrapped in React.memo, it will still re-render because the function reference has changed.
   * To prevent this, we can use the useCallback hook to memoize the function. This way, the function reference will remain the same across renders,
   * and the child component will not re-render unnecessarily.
   * Here's how you can modify the App component to use useCallback:
   *
   */

  const handleCalculate = useCallback((result) => {
    console.log(`Square root is ${result}`);
  }, []);

  console.log("App component rendered");

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

        <Sum onCalculate={handleCalculate} />
      </section>
    </>
  );
}

export default App;
