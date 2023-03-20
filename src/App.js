import "./App.less";
import "./common/style/index.less";
import PostList from "./views/post/PostList";
import ContactList from "./views/contact/ContactList";
import Parent from "./views/context/Parent";
import Counter from "./views/counter";
import TodoPage from "./views/todos";

function App () {
  return (
    <div className="app-container">
      <Parent />
      <PostList />
      <ContactList />
      <Counter />
      <TodoPage />
    </div>
  );
}

export default App;
