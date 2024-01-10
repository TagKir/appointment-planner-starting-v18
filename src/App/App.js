import React, { useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import Root, { ROUTES } from "../Root";
import { AppointmentsPage } from "../appointmentsPage/AppointmentsPage";
import { ContactsPage } from "../contactsPage/ContactsPage";

function App() {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  function addContact(name, phone, email) {
    setContacts((prev) => [
      ...prev,
      { name: name, phone: phone, email: email },
    ]);
  }
  function addAppointment(title, contact, date, time) {
    setAppointments((prev) => [
      ...prev,
      { title: title, contact: contact, date: date, time: time },
    ]);
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
        <Route
          path={ROUTES.CONTACTS}
          element={<ContactsPage contacts={contacts} addContact={addContact} />}
        />
        <Route
          path={ROUTES.APPOINTMENTS}
          element={
            <AppointmentsPage
              contacts={contacts}
              appointments={appointments}
              addAppointment={addAppointment}
            />
          }
        />
      </Route>
    )
  );

  return (
    <div className="App">
      <h1>Challenge Project: Appointment Planner</h1>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
