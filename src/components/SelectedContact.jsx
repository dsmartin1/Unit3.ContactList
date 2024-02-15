//need to rewrite this to match info for selected contact, using id for each contact


export default function selectedContactId({ contacts }) {
  console.log(contacts);
  return (
    <tr>
      <td>{contacts.name}</td>

      <td>{contacts.email}</td>

      <td>{contacts.phone}</td>
    </tr>
  );
}
