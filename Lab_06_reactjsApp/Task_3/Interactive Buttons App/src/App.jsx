import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [bg, setBg] = useState("white");
  const [color, setColor] = useState("black");

  return (
    <div style={{ textAlign: "center", background: bg, height: "100vh" }}>
      <h2 style={{ color: color }}>Event Handling App</h2>

      <button
        onClick={() => setMessage("Hello! Button Clicked")}
        onMouseOver={() => setColor("red")}
        onMouseOut={() => setColor("black")}
      >
        Show Message
      </button>

      <br /><br />

      <button onClick={() => setBg(bg === "white" ? "lightblue" : "white")}>
        Change Background
      </button>

      <br /><br />

      <button onClick={() => alert("This is an alert!")}>
        Show Alert
      </button>

      <p>{message}</p>
    </div>
  );
}

export default App;