/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null);

  useEffect(()=>{
    async function fetchContact() {
        try {
          const response = await fetch(
            `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
          )
          const result = await response.json();
          console.log(result);
          setContact(result);
        } catch (error) {
          console.error(error);
        }
      }
      fetchContact();
      console.log(contact);
    },[]);

    return (
      <div>
        <p>Name: {contact?.name}</p>
        <p>Email: {contact?.email}</p>
        <p>Address:{' '} 
          {contact?.address?.street},{' '} 
          {contact?.address?.suite},{' '}
          {contact?.address?.city},{' '}
          {contact?.address?.zipcode}
        </p>
        <p>Phone: {contact?.phone}</p>
        <p>Website: {contact?.website}</p>
        <p>Company: {contact?.company?.name}</p>
        <button
          onClick={() => {
            setSelectedContactId(null);
        }}>
          Return
        </button>
      </div>
    );
  }