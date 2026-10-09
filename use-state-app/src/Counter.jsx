import { useState } from "react";

function Counter({key,name}) {
  const [count, setCount] = useState(0);
  console.log("Counter component rendered for", name, key);

  function handelCounter({ name }) {
    setCount(count + 1);
  }

  return (
    <>
      <button onClick={handelCounter}>{name}</button>
      <h4>Count: {count}</h4>
    </>
  );
}

export default Counter;
