import { useSelector, useDispatch } from "react-redux";

function State () {
    const todos = useSelector(state => state.todos);
    const unDone = todos.filter(item => !item.done);
    const done = todos.filter(item => item.done);
    const dispathch = useDispatch();
    return <div className="todo-state">
        <span className="todo-count">
            <span className="number">{unDone.length}</span>
            <span className="word">项待完成</span>
        </span>
        {done.length ? <span className="todo-clear">
            <span className="number">{done.length}</span>已完成事项
            <a href="#" onClick={() => {
                dispathch({ type: 'TODO_REMOVE_DONE' });
            }}>Clear</a>
        </span> : ''}
    </div>;
}

export default State;