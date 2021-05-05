import React, { useState } from "react";
import Young from "./Young";
import Adult from "./Adult";
import "./Age.css";

//component that asks the user for her/his age
export default function Age(props) {
  const [age, setAge] = useState(0);
  const [ready, setReady] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    setReady(true);
  }

  function handleAgeChange(event) {
    setAge(parseInt(event.target.value, 10));
  }
  if (ready === false) {
    return (
      <div className="Age">
        <h2>Nice to meet you, {props.name}! How old are you?</h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter your age here.."
                className="form-control"
                autoFocus="on"
                onChange={handleAgeChange}
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
    if (age < 25) {
      return <Young />;
    } else {
      return <Adult />;
    }
  }
}
