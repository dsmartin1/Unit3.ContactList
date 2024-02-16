import { useState, useEffect } from "react";

export default function SelectedContact({}) {
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
        <p>{contact?.name}</p>
        <p>{contact?.email}</p>
        <p>{contact?.address}</p>
        <p>{contact?.phone}</p>
        <p>{contact?.website}</p>
        <p>{contact?.company}</p>
      </div>
    );
  }