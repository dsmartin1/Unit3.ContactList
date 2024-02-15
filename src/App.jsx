/* eslint-disable react/prop-types */

import { useState } from "react";
import ContactList from "./components/ContactList";
import contactRow from "./components/ContactRow";
import "./App.css";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <ContactList />
    </>
  );
}

export default App;
