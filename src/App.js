import React from "react";
import Project from "./views/todoList";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Project />
      </div>
    );
  }
}
