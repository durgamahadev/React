import { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!show) return;

    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      console.log("Clock component rendered: ", interval);
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("Component unmounted: ", interval);
    };
  }, [show]);

  return (
    <div>
      <button
        onClick={() => {
          console.log("Button clicked");
          setShow(!show);
        }}
      >
        {show ? "Hide Clock" : "Show Clock"}
      </button>
      {show && <h2>The time is {time}</h2>}
    </div>
  );
}

export default Clock;
