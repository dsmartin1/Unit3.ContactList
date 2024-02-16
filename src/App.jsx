contactworkshop
/* eslint-disable react/prop-types */
import "./App.css";
import { useState } from "react";
import ContactList from "./components/ContactList";
import contactRow from "./components/ContactRow";
import SelectedContact from "./components/SelectedContact";

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  //const [contact, setContact] = useState(contact.i);

  return (
    <>
      {selectedContactId ? (
        <SelectedContact
          selectedContactId={selectedContactId}
          setSelectedContactId={setSelectedContactId}
        />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}

export default App;
