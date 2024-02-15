/* eslint-disable react/prop-types */
import "./App.css";
import { useState } from "react";
import ContactList from "./components/ContactList";
import contactRow from "./components/ContactRow";
import SelectedContact from "./components/SelectedContact"


function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (
        <div>Selected Contact View</div>
      ) : (
        <ContactList ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}

export default App;
