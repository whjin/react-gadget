import Item from "./Item";
import { useSelector } from "react-redux";

function Todos () {
    const data = useSelector(state => state.todo.todos);

    return <ul className="todo-list">
        {data.map(item => <Item key={item.id} {...item} />)}
    </ul>;
}

export default Todos;