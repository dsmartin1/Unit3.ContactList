/* eslint-disable react/prop-types */

export default function contactRow({ contacts }) {
  console.log(contacts);
  return (
    <tr onClick = {() => {
        setSelectedContactId(contact.id);
    }}>
      <td>{contacts.name}</td>

      <td>{contacts.email}</td>

      <td>{contacts.phone}</td>
    </tr>
  );
}
