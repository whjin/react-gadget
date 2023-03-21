import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";

function Item (props) {
    const { id, title, done } = props;
    const [isEdit, changeEdit] = useState(false);
    const [val, setVal] = useState(title);
    const dispatch = useDispatch();
    const editRef = useRef();
    useEffect(() => {
        if (isEdit) {
            editRef.current.focus();
        }
    }, [isEdit]);

    return <li className={isEdit ? 'editing' : ''}>
        <div >
            <div className="display">
                <div className="item">
                    <input type="checkbox" checked={done} onChange={e => {
                        dispatch({ type: "TODO_DONE", id, done: e.target.checked });
                    }} />
                    <span className={done ? 'done' : ''} onDoubleClick={() => { changeEdit(true); }}>{title}</span>
                </div>
                <div className="remove" onClick={() => {
                    dispatch({ type: "TODO_REMOVE", id });
                }}>X</div>
            </div>
            <div className="edit">
                <input type="text" ref={editRef} value={val} onChange={e => setVal(e.target.value)} onBlur={() => {
                    if (val.trim()) {
                        dispatch({
                            type: "TODO_EDIT",
                            id,
                            title: val
                        });
                    } else {
                        setVal(title);
                    }
                    changeEdit(false);
                }} />
            </div>
        </div>
    </li>;
}

export default Item;