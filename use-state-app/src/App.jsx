import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import Counter from "./Counter";

function App() {
  const [name, setName] = useState(["John", "Jane", "Doe"]);

  return (
    <>
      <button onClick={() => setName(["Bapun", ...name])}>Add Name</button>
      <ul>
        {name.map((n, index) => (
          <li>
            <Counter  key={index} name={n} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
