function reducer (
    state = {
        count: 1,
        todos: []
    },
    action
) {
    const { count, todos } = state;

    switch (action.type) {
        case "COUNT_PLUS":
            return { count: count + 1 };
        case "COUNT_REDUCE":
            return { count: count - 1 };
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

export default reducer;