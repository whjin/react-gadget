import "./App.less";
import PostList from "./views/post/PostList";
import ContactList from "./views/contact/ContactList";
import Parent from "./views/context/Parent";

function App() {
  return (
    <div className="app-container">
      <Parent />
      <PostList />
      <ContactList />
    </div>
  );
}

export default App;
