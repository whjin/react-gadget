import { useSelector, useDispatch } from "react-redux";

function Select () {
    let count = useSelector((state) => state.select.count);
    const dispatch = useDispatch();

    return <div className="counter-item">
        <button onClick={() => { dispatch({ type: 'SELECT_REDUCE' }); }}>-</button>
        <span className="counter-text">{count}</span>
        <button onClick={() => { dispatch({ type: 'SELECT_PLUS' }); }}>+</button>
    </div>;
}

export default Select;
