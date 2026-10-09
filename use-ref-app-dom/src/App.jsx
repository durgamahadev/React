import { useState, useRef } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

let timerId;
function App() {
  const inputPasswordRef = useRef(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleInputChange({ email, password }) {
    setFormData({
      email: email ?? formData.email,
      password: password ?? formData.password,
    });
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      inputPasswordRef.current.focus();
      inputPasswordRef.current.innerText = "Enter your password";
      console.log(inputPasswordRef);
    }
  }

  return (
    <>
      <section>
        <p>User login Form</p>

        <input
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e) =>
            handleInputChange({ ...formData, email: e.target.value })
          }
          onKeyDown={handleKeyDown}
        />
        <input
          type="password"
          placeholder="Enter your password"
          ref={inputPasswordRef}
          value={formData.password}
          onChange={(e) =>
            handleInputChange({ ...formData, password: e.target.value })
          }
        />
      </section>
    </>
  );
}

export default App;
