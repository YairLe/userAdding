import React from "react";
import "./App.css";
import Button from "./Components/Button/Button";

function App() {
  const pressButton = () => {
    console.log("hey");
  };

  return (
    <div className="App">
      <Button ButtonClick={pressButton} buttonLabel={"test"} />
    </div>
  );
}

export default App;
