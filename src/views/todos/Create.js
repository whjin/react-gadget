import { useState } from "react";
import { useDispatch } from "react-redux";

function Create () {
    const [val, setVal] = useState("");
    const dispatch = useDispatch();

    return <div className="todo-create">
        <input type="text" autoComplete="off" placeholder="What needs to be done?" value={val} onChange={(e) => {
            setVal(e.target.value);
        }} onKeyDown={(e) => {
            if (e.keyCode === 13 && val.trim()) {
                dispatch({
                    type: "TODO_ADD",
                    title: val
                });
                setVal('');
            }
        }} />
    </div>;
}
export default Create;