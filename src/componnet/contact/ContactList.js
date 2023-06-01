import React from "react";
import ContactItem from "./ContactItem";
import contactList from "../../static/mock/contactList.json";
import TravelPlan from '../travelPlan/TravelPlan';
import MailClient from "../mailClient/MailClient";

class ContactList extends React.Component {
  state = {
    openName: "",
  };

  toggleOpen = (name) => {
    this.setState({ openName: name });
  };

  render () {
    const { openName } = this.state;
    return (
      <div className="common-container">
        <section className="contact-list">
          {Object.keys(contactList).map((item) => {
            return (
              <ContactItem
                key={contactList[item].id}
                contact={contactList[item]}
                name={item}
                openName={openName}
                toggleOpen={this.toggleOpen}
              />
            );
          })}
        </section>
        <TravelPlan />
        <MailClient />
      </div>
    );
  }
}

export default ContactList;
