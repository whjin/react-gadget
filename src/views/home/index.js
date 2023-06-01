import React from "react";
import "../../common/style/index.less";
import PostList from "../../componnet/post/PostList";
import ContactList from "../../componnet/contact/ContactList";
import Parent from "../../componnet/context/Parent";
import Counter from "../../componnet/counter";
import TodoPage from "../../componnet/todos";
import Profile from "../../componnet/profile/Profile";
import TaskApp from "../../componnet/taskApp/TaskApp";

class Home extends React.Component {
  render () {
    return (
      <div className="app-container">
        <Parent />
        <PostList />
        <ContactList />
        <Counter />
        <TodoPage />
        <Profile />
        <TaskApp />
      </div>
    );
  }
}

export default Home;
