import React from "react";
import PostItem from "./PostItem";
import postList from "../../static/mock/postList.json";

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
        posts: postList,
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
      <div className="common-container">
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
