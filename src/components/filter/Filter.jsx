import React from "react";
import css from "./Filter.module.css";


export const Filter = ({ onChange }) => {

  const handleChange = evt => {
    const { value } = evt.target;
    onChange(value);
  };


  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.inputFind}
        type="text"
        placeholder="Enter name"
        name="filter"
        onChange={handleChange}
      />
    </label>
  )
}
