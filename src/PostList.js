import React from "react";
import PostItem from "./PostItem";

const data = [
  {
    title: "大家一起来讨论react吧",
    author: "张三",
    date: "2022-11-19 23:09:21",
  },
  {
    title: "大家一起来讨论react吧",
    author: "李四",
    date: "2022-11-19 23:09:21",
  },
  {
    title: "大家一起来讨论react吧",
    author: "王五",
    date: "2022-11-19 23:09:21",
  },
];

class PostList extends React.Component {
  render() {
    return (
      <div>
        帖子列表：
        <ul>
          {data.map((item, index) => (
            <PostItem
              key={index}
              title={item.title}
              author={item.author}
              date={item.date}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default PostList;
