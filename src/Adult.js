import React, { useState } from "react";
import "./Adult.css";

//component that is applied if the person is older than 25
export default function Adult() {
  const [days, setDays] = useState(0);
  const [ready, setReady] = useState(false);
  const refreshPage = () => {
    window.location.reload();
  };

  function handleSubmit(event) {
    event.preventDefault();
    setReady(true);
  }

  function handleAgeChange(event) {
    setDays(parseInt(event.target.value, 10));
  }

  if (ready === false) {
    return (
      <div className="Adult">
        <h2>Perfect! And how many days will you stay?</h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="text"
                placeholder="Enter days here.."
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
    if (days < 3) {
      return (
        <div>
          <div className="Adult">😊You should buy a T1 ticket!</div>
          <button onClick={refreshPage} className="btn btn-primary">
            Start again
          </button>
        </div>
      );
    } else {
      if (days >= 3 && days < 10) {
        return (
          <div>
            <div className="Adult">🥳You should buy a T2 ticket!</div>
            <button onClick={refreshPage} className="btn btn-primary">
              Start again
            </button>
          </div>
        );
      } else {
        return (
          <div>
            <div className="Adult">🤩You should buy a T3 ticket!</div>
            <button onClick={refreshPage} className="btn btn-primary">
              Start again
            </button>
          </div>
        );
      }
    }
  }
}
