import React from "react";
import Title from "./Title";
import Create from "./Create";
import Todos from "./Todos";
import State from "./State";

class TodoPage extends React.Component {
    render () {
        return <div className="common-container todo-container">
            <Title />
            <div className="content">
                <Create />
                <Todos />
                <State />
            </div>
        </div>;
    }
}

export default TodoPage;