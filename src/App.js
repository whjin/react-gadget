import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: [{ id: 0, value: "React", done: false, delete: false }],
    };
  }

  addTodoItem = () => {
    const newTodoItem = {
      id: this.state.todoItems.length,
      value: this.refs.todoItemValue.value,
      done: false,
      delete: false,
    };
    this.setState({
      todoItems: [...this.state.todoItems, newTodoItem],
    });
  };

  deleteTodoItem = (item) => {
    item.delete = true;
    this.setState({
      todoItems: [...this.state.todoItems, item],
    });
  };

  render() {
    const { todoItems } = this.state;

    return (
      <div>
        <header>TodoList</header>
        <main>
          <div>
            <input
              type="text"
              ref="todoItemValue"
              placeholder="add something..."
            />
            <button type="submit" onClick={this.addTodoItem}>
              添加
            </button>
          </div>
          <ul>
            {todoItems.map((item) => {
              if (item.delete) {
                return;
              }
              return (
                <li key={item.id}>
                  <label>{item.value}</label>
                  <button
                    onClick={() => {
                      this.deleteTodoItem(item);
                    }}
                  >
                    删除
                  </button>
                </li>
              );
            })}
          </ul>
        </main>
      </div>
    );
  }
}
