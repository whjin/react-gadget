function reducer (
    state = {
        count: 1,
        todos: []
    },
    action
) {
    switch (action.type) {
        case "COUNT_PLUS":
            return { count: state.count + 1 };
        case "COUNT_REDUCE":
            return { count: state.count - 1 };
        case "TODO_ADD":
            return [...state.todos, {
                id: Date.now(),
                title: action.title,
                done: false
            }];
        case "TODO_DONE":
            state.todos.map(item => {
                if (item.id === action.id) {
                    item.done = action.done;
                }
            });
            return [...state.todos];
        case "TODO_EDIT":
            state.todos.map(item => {
                if (item.id === action.id) {
                    item.title = action.title;
                }
            });
            return [...state.todos];
        case "TODO_REMOVE":
            state.todos = state.todos.filter(item.id === action.id);
            return state.todos;
        case "TODO_REMOVE_DONE":
            state.todos = state.todos.filter(item => !item.done);
            return state.todos;
    }
    return state;
}

export default reducer;