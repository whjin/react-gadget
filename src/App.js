import "./App.css";
import PostList from "./views/post/PostList";
import ContactList from "./views/contact/ContactList";

function App() {
  return (
    <div className="app-container">
      <PostList />
      <ContactList />
    </div>
  );
}

export default App;
