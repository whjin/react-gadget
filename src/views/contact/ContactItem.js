import React from "react";
import "./contact.less";

class Contact extends React.Component {
  state = {
    isOpen: false,
  };
  render() {
    const { contact, openName, name, toggleOpen } = this.props;
    const { isOpen } = this.state;

    return (
      <div className={`contact-group ${openName === name ? "expanded" : ""}`}>
        <dt
          onClick={() => {
            toggleOpen(openName === name ? "" : name);
          }}
        >
          {contact.title}
        </dt>
        {contact.list.map((item) => {
          return <dd key={`key-${item.name}`}>{item.name}</dd>;
        })}
      </div>
    );
  }
}

export default Contact;
