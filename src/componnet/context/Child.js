import React from "react";
import context, { Consumer } from "./context";

class Child extends React.Component {
  static contextType = context;

  render() {
    // return (
    //   <div className="context-item">
    //     <Consumer>
    //       {(val) => {
    //         return <div dangerouslySetInnerHTML={{ __html: val.info }}></div>;
    //       }}
    //     </Consumer>
    //   </div>
    // );
    return (
      <div
        className="context-item"
        dangerouslySetInnerHTML={{ __html: this.context.info }}
      ></div>
    );
  }
}

Child.contextType = context;

export default Child;
