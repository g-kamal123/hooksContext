import React from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = React.useState(0);
  const inc = (event) => {
    var c= count;
    setCount(c+1);
  };
  const res = (event) => {
    setCount(0);
  };
  const dec = (event) => {
    var c= count;
    setCount(c-1);
  };
  return (
    <div>
      <div className="timer-group">
        <div className="face">
          <h2>Countdown</h2>
          <p id="lazy">{count}</p>
        </div>
      </div>
      <div>
        <button onClick={inc} className="btns">
          Increment
        </button>
        <button onClick={res} className="btns">
          Reset
        </button>
        <button onClick={dec} className="btns">
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
