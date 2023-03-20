import "./App.less";
import "./common/style/index.less";
import PostList from "./views/post/PostList";
import ContactList from "./views/contact/ContactList";
import Parent from "./views/context/Parent";
import Counter from "./views/counter";

function App () {
  return (
    <div className="app-container">
      <Parent />
      <PostList />
      <ContactList />
      <Counter />
    </div>
  );
}

export default App;
