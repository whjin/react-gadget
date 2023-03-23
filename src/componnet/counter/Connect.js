import React from "react";
import { connect } from "react-redux";

function Connect (props) {
  const { connect, dispatch } = props;

  const { count } = connect;

  return <div className="counter-item">
    <button onClick={() => { dispatch({ type: "CONNECT_REDUCE" }); }}>-</button>
    <span className="counter-text">{count}</span>
    <button onClick={() => { dispatch({ type: "CONNECT_PLUS" }); }}>+</button>
  </div>;
}

Connect = connect(state => state)(Connect);

export default Connect;
