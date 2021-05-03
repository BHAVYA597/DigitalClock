import "./styles.css";
import React, { useState } from "react";

function App() {
  let newTime = new Date().toLocaleTimeString();

  const [Clock, newClock] = useState(newTime);

  const Change = () => {
    newTime = new Date().toLocaleTimeString();
    newClock(newTime);
  };

  setInterval(Change, 1000);

  return (
    <>
      <div>
        <h1>{Clock}</h1>
      </div>
    </>
  );
}

export default App;
