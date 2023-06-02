export default function contactList ({ contacts, selectedId, onSelect }) {
  return (
    <>
      <ul>
        {
          contacts.map(contact => (
            <li key={contact.id}>
              <button onClick={() => onSelect(contact.id)}>
                {contact.id === selectedId ? <b>{contact.name}</b> : contact.name}
              </button>
            </li>
          ))
        }
      </ul>
    </>
  );
} 