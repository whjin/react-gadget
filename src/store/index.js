import { legacy_createStore as createStore, combineReducers } from "redux";

function connect (state = { count: 1 }, action) {
    const { count } = state;
    switch (action.type) {
        case "CONNECT_PLUS":
            return { count: count + 1 };
        case "CONNECT_REDUCE":
            return { count: count - 1 };
    }
    return state;
}

function select (state = { count: 1 }, action) {
    const { count } = state;
    switch (action.type) {
        case "SELECT_PLUS":
            return { count: count + 1 };
        case "SELECT_REDUCE":
            return { count: count - 1 };
    }
    return state;
}

function todo (state = { todos: [] }, action) {
    const { todos } = state;
    switch (action.type) {
        case "TODO_ADD":
            return {
                todos: [...todos, {
                    id: Date.now(),
                    title: action.title,
                    done: false
                }]
            };
        case "TODO_DONE":
            todos.forEach(item => {
                if (item.id === action.id) {
                    item.done = action.done;
                }
            });
            return {
                todos: [...todos]
            };
        case "TODO_EDIT":
            todos.forEach(item => {
                if (item.id === action.id) {
                    item.title = action.title;
                }
            });
            return {
                todos: [...todos]
            };
        case "TODO_REMOVE":
            return { todos: todos.filter(item => item.id !== action.id) };
        case "TODO_REMOVE_DONE":
            return { todos: todos.filter(item => !item.done) };
    }
    return state;
}

export default createStore(combineReducers({ connect, select, todo }));
