import React from "react";
import TodoListItem from "./TodoListItem";

export default class TodoList extends React.Component {
  deleteTodoItem = (item) => {
    const { deleteTodoItem } = this.props;
    deleteTodoItem(item);
  };

  render () {
    const { todoItems } = this.props;

    return (
      <ul>
        {todoItems.map((item) => {
          if (item.delete) {
            return;
          }
          return (
            <TodoListItem
              key={item.id}
              item={item}
              deleteTodoItem={this.deleteTodoItem}
            />
          );
        })}
      </ul>
    );
  }
}
