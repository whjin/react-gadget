import React from "react";
import { connect } from "react-redux";

function Counter (props) {
  const { count, dispatch } = props;

  return <div className="common-container counter-container">
    <button onClick={() => { dispatch({ type: "COUNT_REDUCE" }); }}>-</button>
    <span className="counter-text">{count}</span>
    <button onClick={() => { dispatch({ type: "COUNT_PLUS" }); }}>+</button>
  </div>;
}

Counter = connect(state => state)(Counter);

export default Counter;
