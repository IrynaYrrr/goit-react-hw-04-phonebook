import React, { Component } from "react";
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

export class App extends Component {

  state = {
    contacts: [],
    filter: ''
  }

  handleSubmitForm = (contact) => {
    if (this.state.contacts.find(
      (item) => item.name.toLowerCase() === contact.name.toLowerCase()
    )) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    const newContact = {
      ...contact,
      id: nanoid(),
    }

    this.setState((prev) => ({
      contacts: [newContact, ...prev.contacts],
    }))
  }

  handleFilterChange = (value) => {
    this.setState(() => ({
      filter: value,
    }))
  }

  handleDelete = (id) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter((contact) => contact.id !== id),
    }))
  }

  getFilteredContacts = () => {
    return this.state.contacts.filter((el) =>
      el.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    const filtered = this.getFilteredContacts();
    return (
      <div>
        <h1 style={headersStyles}>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmitForm} />
        <h2 style={headersStyles}>Contacts</h2>
        <Filter
          onChange={this.handleFilterChange}
        />
        <ContactList
          contacts={filtered}
          filter={this.state.filter}
          handleDelete={this.handleDelete}
        />
      </div>
    )
  }
}
