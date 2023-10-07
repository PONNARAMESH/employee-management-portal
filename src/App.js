import React, { useState, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import { UserProfileCard } from "./components/UserProfileCard";

function TestComp(props) {
  const { refObj, count } = props;
  return <h1 ref={refObj}> Testing {count} </h1>;
}
function Editor() {
  /* 1. Call useRef */
  const textboxRef = useRef();
  return (
    <div>
      {/* 2. "Bind" the ref with the input */}
      <input type="text" ref={textboxRef} />
      <button
        onClick={() => {
          /* 3. Access the DOM node via ref.current */
          textboxRef.current.focus();
        }}
      >
        Focus
      </button>
    </div>
  );
}

console.log("##env-file-data ", process.env);
function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  console.log("##count : ", count, countRef?.current?.innerText);
  return (
    <div className="App">
      <header className="App-header">
        <TestComp refObj={countRef} count={count} />
        <Editor />
        <button
          onClick={() => {
            setCount((c) => ++c);
          }}
        >
          {" "}
          Click Me{" "}
        </button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <UserProfileCard userName="James Bond" userPhoto="" />
      </header>
    </div>
  );
}

export default App;
