import React, { useState } from "react";
import Age from "./Age";
import "./Name.css";

//component that is taking care of the user's name
export default function Name() {
  const [name, setName] = useState("Stranger");
  const [submit, setSubmit] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmit(true);
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }
  if (submit === false) {
    return (
      <div className="Name">
        <h1>Welcome to Ninebarc App!</h1>
        <h2>What's your name?</h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="text"
                placeholder="Enter your name here.."
                className="form-control"
                autoFocus="on"
                onChange={handleNameChange}
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Enter" className="btn btn-primary" />
            </div>
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <div className="Name">
        <Age name={name} />
      </div>
    );
  }
}
