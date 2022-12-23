// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [btnColor, setBtnColor] = useState("green");
  const newBtnColor = btnColor === "green" ? "blue" : "green";

  return (
    <div className="App">
      <h1>Test Website</h1>

      <button style={{backgroundColor: btnColor, color: 'white'}} onClick = {() => setBtnColor(newBtnColor)}>
        Change Color
      </button>
      {/* <header className="App-header"> */}
      {/* <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React going home
      </a> */}
      {/* </header> */}
    </div>
  );
}

export default App;
