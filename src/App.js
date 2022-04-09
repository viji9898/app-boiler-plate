import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [helloWorld, setHelloWorld] = useState("");

  const getHelloWorld = () => {
    axios
      .get(".netlify/functions/getHelloWorld", {
        baseURL: "/",
      })
      .then(function (response) {
        setHelloWorld(response.data.data);
      });
  };
  useEffect(() => {
    getHelloWorld();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>From Faunadb:</p>
        <p>
          <code>"{helloWorld.title}"</code>.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
