import React from "react";

class Contact extends React.Component {
  render () {
    const { contact, openName, name, toggleOpen } = this.props;

    return (
      <div className={openName === name ? "expanded" : ""}>
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
