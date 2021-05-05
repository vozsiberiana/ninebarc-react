import React from "react";
import "./App.css";
import Name from "./Name";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <Name />
          <p>
            This project was coded by Anna Knyazkina and it's{" "}
            <a
              href="https://github.com/vozsiberiana/ninebarc-react"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>
          </p>
        </header>
      </div>
    </div>
  );
}
