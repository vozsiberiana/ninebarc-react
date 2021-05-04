import React from "react";
import "./App.css";
import Ticket from "./Ticket";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ninebarc app</h1>
        <Ticket />
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
  );
}
