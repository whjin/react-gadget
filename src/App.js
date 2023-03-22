import "./App.less";
import "./common/style/index.less";
import PostList from "./views/post/PostList";
import ContactList from "./views/contact/ContactList";
import Parent from "./views/context/Parent";
import Counter from "./views/counter";
import TodoPage from "./views/todos";

import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./componnet/nav";
import { routes } from "./route/router";

function App () {
  // return (
  //   <div className="app-container">
  //     <Parent />
  //     <PostList />
  //     <ContactList />
  //     <Counter />
  //     <TodoPage />
  //   </div>
  // );

  return <Fragment>
    <Nav />
    <Routes>
      {
        routes.map((item) => {
          return <Route key={item.path} path={item.path} exact={item.exact} render={item.render}
          />;
        })
      }
    </Routes>
  </Fragment>;
}

export default App;
