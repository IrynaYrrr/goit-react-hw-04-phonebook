import React, { Component } from "react";
import css from "./Filter.module.css";


export class Filter extends Component {

  handleChange = evt => {
    const { value } = evt.target;
    this.props.onChange(value);
  };

  render() {
    return (
      <label className={css.label}>
        Find contacts by name
        <input
          className={css.inputFind}
          type="text"
          placeholder="Enter name"
          name="filter"
          onChange={this.handleChange}
        />
      </label>
    )
  }
}
