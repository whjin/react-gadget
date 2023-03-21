import { useSelector, useDispatch } from "react-redux";

function Select () {
    let count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    return <div className="counter-item">
        <button onClick={() => { dispatch({ type: 'COUNT_REDUCE' }); }}>-</button>
        <span className="counter-text">{count}</span>
        <button onClick={() => { dispatch({ type: 'COUNT_PLUS' }); }}>+</button>
    </div>;
}

export default Select;
