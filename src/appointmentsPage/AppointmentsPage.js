import React, { useState } from "react";

export const AppointmentsPage = (props) => {
  const [title, setTitle] = useState();
  const [contact, setContact] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !props.appointments.some((appointment) => appointment.title === title)
    ) {
      props.addAppointment(title, contact, date, time);
      setTitle("");
      setContact("");
      setDate("");
      setTime("");
    }
  };

  return (
    <div>
      <section>
        <h2>Add Appointments</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            list="selectedContact"
            placeholder="No Contact Select"
            onChange={(e) => setContact(e.target.value.replace(/\s/g, ""))}
          />
          <datalist id="selectedContact">
            {props.contacts.map((contact) => (
              <option value={contact.name}>{contact.name}</option>
            ))}
          </datalist>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <input type="submit" />
        </form>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        {props.appointments.map((appointment) => (
          <ul>
            <li className="title">{appointment.title}</li>
            <li>{appointment.contact}</li>
            <li>{appointment.date}</li>
            <li>{appointment.time}</li>
          </ul>
        ))}
      </section>
    </div>
  );
};
