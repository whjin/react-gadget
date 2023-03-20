import React from "react";
import Connect from "./Connect";
import Select from "./Select";

class Counter extends React.Component {
    render () {
        return (
            <div className="common-container counter-container">
                <Connect />
                <Select />
            </div>
        );
    }
}

export default Counter;
