import React from "react";
import css from "./ContactList.module.css";

export const ContactList = ({ contacts, handleDelete }) => {
  return (
    <div className={css.contactsWrap}>
      <ul>
        {contacts.map(({id, number, name}) =>
            <li className={css.contactItem} key={id}>
              <div>{name}: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{number}</div>
              <div>
                <button className={css.btnDelete}
                  onClick={() => handleDelete(id)}>
                  Delete
                </button>
              </div>
            </li>
        )}
      </ul>
    </div>
  )
}
