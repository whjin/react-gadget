import React from "react";
import axios from "axios";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default class Test extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      todoItems: [],
    };
  }

  componentDidMount () {
    axios.get("http://localhost:8000/items").then(res => {
      this.setState({
        todoItems: [...res.data]
      });
    });
  }

  addTodoItem = (todoItemValue) => {
    const newTodoItem = {
      id: this.state.todoItems.length,
      value: todoItemValue,
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

  render () {
    const { todoItems } = this.state;

    return (
      <div>
        <header>TodoList</header>
        <main>
          <TodoForm addTodoItem={this.addTodoItem} />
          <TodoList
            todoItems={todoItems}
            deleteTodoItem={this.deleteTodoItem}
          />
        </main>
      </div>
    );
  }
}
