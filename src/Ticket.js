import React, { useState } from "react";
import "./Ticket.css";

//component that asks the user more specific questions
export default function Ticket() {
  const [age, setAge] = useState(0);
  // const [days, setDays] = useState(0);
  function handleSubmit(event) {
    event.preventDefault();
    if (age < 25) {
      // alert(`You are a ${age} year´s old student`);
    } else {
      //  alert(`You are a ${age} year´s old adult`);
    }
  }

  function handleAgeChange(event) {
    setAge(event.target.value);
  }
  return (
    <div className="Ticket">
      <h2>How old are you?</h2>
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
}
