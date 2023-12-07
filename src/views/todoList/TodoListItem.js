import React from "react";

export default class TodoListItem extends React.Component {
  deleteTodoItem = () => {
    const { deleteTodoItem, item } = this.props;
    deleteTodoItem(item);
  };

  render() {
    const {
      item: { value },
    } = this.props;
    return (
      <li>
        <label>{value}</label>
        <button onClick={this.deleteTodoItem}>删除</button>
      </li>
    );
  }
}
