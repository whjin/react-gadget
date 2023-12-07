import React from "react";

export default class TodoForm extends React.Component {
  addTodoItem = () => {
    const { addTodoItem } = this.props;
    const { value } = this.refs.todoItemValue;
    addTodoItem(value);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          ref="todoItemValue"
          placeholder="add or search something..."
        />
        <button type="submit" onClick={this.addTodoItem}>
          添加
        </button>
      </div>
    );
  }
}
