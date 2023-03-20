function Item () {
    return <li>
        <div className="todo-item">
            <div className="display">
                <input type="checkbox" className="check" />
                <div className="todo-content">模拟数据</div>
                <div className="todo-destroy"></div>
            </div>
            <div className="edit">
                <input type="text" className="todo-input" />
            </div>
        </div>
    </li>;
}

export default Item;