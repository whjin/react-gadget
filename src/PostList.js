import React from "react";
import PostItem from "./PostItem";

class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
    this.timer = null;
    this.handleVote = this.handleVote.bind(this);
  }
  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({
        posts: [
          {
            id: 1,
            title: "大家一起来讨论react吧",
            author: "张三",
            date: "2022-11-19 23:09:21",
            vote: 0,
          },
          {
            id: 2,
            title: "大家一起来讨论react吧",
            author: "李四",
            date: "2022-11-19 23:09:21",
            vote: 0,
          },
          {
            id: 3,
            title: "大家一起来讨论react吧",
            author: "王五",
            date: "2022-11-19 23:09:21",
            vote: 0,
          },
        ],
      });
    }, 1000);
  }
  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }
  handleVote(id) {
    const posts = this.state.posts.map((item) => {
      const newItem = item.id === id ? { ...item, vote: ++item.vote } : item;
      return newItem;
    });
    this.setState({ posts });
  }
  render() {
    return (
      <div>
        帖子列表：
        <ul>
          {this.state.posts.map((item) => (
            <PostItem key={item.id} post={item} onVote={this.handleVote} />
          ))}
        </ul>
      </div>
    );
  }
}

export default PostList;
