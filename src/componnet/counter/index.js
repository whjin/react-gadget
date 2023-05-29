import React from "react";
import Connect from "./Connect";
import Select from "./Select";
import Form from "./Form";

class Counter extends React.Component {
    render () {
        return (
            <div className="common-container counter-container">
                <Select />
                <Connect />
                <Form />
            </div>
        );
    }
}

export default Counter;
