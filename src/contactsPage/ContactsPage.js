import React, { useState, useEffect } from "react";
import styles from "./contactsPage.module.css";

export const ContactsPage = (props) => {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!props.contacts.some((contact) => contact.name === name)) {
      props.addContact(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              list="last-name"
              value={name}
              required
            />
          </label>
          <input
            type
            pattern="[789][0-9]{10}"
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone "
            value={phone}
            required
          />
          <input
            type="text"
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            value={email}
            required
          />
          <input type="submit" />
        </form>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        {props.contacts.map((contact) => (
          <ul>
            <li className={styles.name}>{contact.name}</li>
            <li>{contact.phone}</li>
            <li>{contact.email}</li>
          </ul>
        ))}
      </section>
    </div>
  );
};
