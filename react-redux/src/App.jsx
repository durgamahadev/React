import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Counter, decrement, increment, incrementBy } from "./redux/slice/counterSlice";

export default function App() {
  const [countBy, setCountBy] = useState(0);
  const dispatch = useDispatch();
  const count = useSelector(Counter);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <input
        value={countBy}
        onChange={(e) => setCountBy(Number(e.target.value))}
      />
      <button onClick={() => dispatch(incrementBy(countBy))}>IncrementBy</button>
    </div>
  );
}
