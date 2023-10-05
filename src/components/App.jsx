import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { ContactForm } from './contactForm/ContactForm';
import { Filter } from './filter/Filter';
import { ContactList } from './contactList/ContactList';

const headersStyles = {
  margin: 8,
  padding: "12px 16px",
  borderRadius: 4,
  backgroundColor: "orange",
  color: "white",
  textAlign: 'center',
};

export const App = () => {

  const [contacts, setContacts] = useState(() => JSON.parse(localStorage.getItem('contacts')) ?? []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);

  const handleSubmitForm = (contact) => {
    if (contacts.find(
      (item) => item.name.toLowerCase() === contact.name.toLowerCase()
    )) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    const newContact = {
      ...contact,
      id: nanoid(),
    }

    setContacts((prev) => [newContact, ...prev])
  }

  const handleFilterChange = (value) => {
    setFilter(value)
  }

  const handleDelete = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id)
    )
  }

  const getFilteredContacts = () => {
    return contacts.filter((el) =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filtered = getFilteredContacts();
  return (
    <div>
      <h1 style={headersStyles}>Phonebook</h1>
      <ContactForm onSubmit={handleSubmitForm} />
      <h2 style={headersStyles}>Contacts</h2>
      <Filter
        onChange={handleFilterChange}
      />
      <ContactList
        contacts={filtered}
        handleDelete={handleDelete}
      />
    </div>
  )
}
