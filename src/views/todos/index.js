import React, { Fragment } from "react";
import Title from "./Title";
import Create from "./Create";
import Todos from "./Todos";
import State from "./State";
import { useSelector } from "react-redux";

function TodoPage () {
    const data = useSelector(state => state.todos);

    return <div id="todoApp" className="common-container">
        <div className=" todo-wrapper">
            <Title />
            <div className="content">
                <Create />
                {
                    data.length ? <Fragment>
                        <Todos />
                        <State />
                    </Fragment> : ''
                }
            </div>
        </div>
    </div>;
}

export default TodoPage;