function State () {
    return <div id="todo-state">
        <span className="todo-count">
            <span className="number">2</span>
            <span className="word">项待完成</span>
        </span>
        <span className="todo-clear">
            <a href="#">Clear <span>1</span>已完成事项</a>
        </span>
    </div>;
}

export default State;