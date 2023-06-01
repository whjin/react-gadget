import React from "react";
import "../../common/style/index.less";
import PostList from "../../componnet/post/PostList";
import ContactList from "../../componnet/contact/ContactList";
import Parent from "../../componnet/context/Parent";
import TodoPage from "../../componnet/todos";
import Profile from "../../componnet/profile/Profile";

class Home extends React.Component {
  render () {
    return (
      <div className="app-container">
        <Parent />
        <PostList />
        <ContactList />
        <TodoPage />
        <Profile />
      </div>
    );
  }
}

export default Home;
