import React, { Component } from 'react';
import css from "./ContactForm.module.css";

const INITIAL_STATE = {
  name: "",
  number: "",
};

export class ContactForm extends Component {
  state = { ...INITIAL_STATE };


  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <div className={css.formDiv}>
          <label className={css.label}>
            Name
            <input
              className={css.inputName}
              type="text"
              name="name"
              placeholder="Enter name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={name}
              onChange={this.handleChange}
              required
            />
          </label>
          <label className={css.label}>
            Number
            <input
              className={css.inputNumber}
              type="tel"
              name="number"
              placeholder="Enter number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              value={number}
              onChange={this.handleChange}
              required
            />
          </label>
        </div>
        <button  className={css.buttonAdd} type="submit">add contact</button>
      </form>
    );
  }
}
