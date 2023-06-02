import { useState } from "react";
import ContactList from "./ContactList";
import EditContact from "./EditContact";

const initialContacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' }
];

export default function ContactManager () {
  const [contacts, setContacts] = useState(initialContacts);
  const [selectedId, setSelectedId] = useState(0);

  const selectedContact = contacts.find(contact => contact.id === selectedId);

  function handleSave (updateData) {
    const nextContacts = contacts.map(contact => {
      if (contact.id === updateData.id) {
        return updateData;
      } else {
        return contact;
      }
    });
    setContacts(nextContacts);
  }

  return (
    <div className="contactManager-container">
      <ContactList contacts={contacts} selectedId={selectedId} onSelect={id => setSelectedId(id)} />
      <hr />
      <EditContact key={selectedId} initialData={selectedContact} onSave={handleSave} />
    </div>
  );
}