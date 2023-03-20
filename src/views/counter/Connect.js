import React from "react";
import { connect } from "react-redux";

function Connect (props) {
  const { count, dispatch } = props;

  return <div className="counter-item">
    <button onClick={() => { dispatch({ type: "COUNT_REDUCE" }); }}>-</button>
    <span className="counter-text">{count}</span>
    <button onClick={() => { dispatch({ type: "COUNT_PLUS" }); }}>+</button>
  </div>;
}

Connect = connect(state => state)(Connect);

export default Connect;
