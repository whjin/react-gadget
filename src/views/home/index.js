import React from "react";
import "../../common/style/index.less";
import PostList from "../../componnet/post/PostList";
import Contact from "../../componnet/contact/Contact";
import Parent from "../../componnet/context/Parent";
import TodoPage from "../../componnet/todos";
import Profile from "../../componnet/profile/Profile";

class Home extends React.Component {
  render () {
    return (
      <div className="app-container">
        <Parent />
        <PostList />
        <Contact />
        <TodoPage />
        <Profile />
      </div>
    );
  }
}

export default Home;
