 contactworkshop
/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import ContactRow from "./ContactRow";

const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];

export default function contactList({ setSelectedContactId }) {
  const [contacts, setContacts] = useState(dummyContacts);

  useEffect(() => {
    //define async function to fetch data
    async function fetchContacts() {
      try {
        //fetch logic goes here
        const response = await fetch(
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
        );
        const result = await response.json();
        console.log(result);
        setContacts(result);
        // console.log(contacts);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContacts();
  }, []);

  console.log("Contacts:", contacts);
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="rowHeading">Name</td>
          <td className="rowHeading">Email</td>
          <td className="rowHeading">Phone</td>
        </tr>
        {contacts.map((contact) => {
          return (
            <ContactRow 
              setSelectedContactId={setSelectedContactId}
              key={contact.id}
              contact={contact}
            />
          );
        })}
      </tbody>
    </table>
  );
}

