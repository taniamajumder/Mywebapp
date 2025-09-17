import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5001/api/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React + Node.js Microservice Demo 🚀</h1>
      <p>Message from backend:</p>
      <h2>{message}</h2>
    </div>
  );
}

export default App;
