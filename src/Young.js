import React, { useState } from "react";
import "./Young.css";

//component that is applied if the person is younger than 25
export default function Young() {
  const [student, setStudent] = useState(false);
  const [ready, setReady] = useState(false);
  const refreshPage = () => {
    window.location.reload();
  };

  function handleSubmit(event) {
    event.preventDefault();
    setReady(true);
  }

  function handleStudentChange(event) {
    if (event.target.id === "1") {
      setStudent(true);
    } else {
      setStudent(false);
    }
  }

  if (ready === false) {
    return (
      <div className="Student">
        <h2>Cool! We are almost there. What about studying?</h2>
        <form onSubmit={handleSubmit}>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="1"
              onChange={handleStudentChange}
            />
            <label class="form-check-label" for="flexRadioDefault1">
              I'm a student
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="2"
              onChange={handleStudentChange}
            />
            <label class="form-check-label" for="flexRadioDefault2">
              I'm not a student
            </label>
          </div>
          <input type="submit" value="Enter" className="btn btn-primary" />
        </form>
      </div>
    );
  } else {
    if (student === true) {
      return (
        <div>
          <div className="Young">👏You should buy a St1 ticket!</div>
          <button onClick={refreshPage} className="btn btn-primary">
            Start again
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <div className="Young">🙌You should buy a Y1 ticket!</div>
          <button onClick={refreshPage} className="btn btn-primary">
            Start again
          </button>
        </div>
      );
    }
  }
}
