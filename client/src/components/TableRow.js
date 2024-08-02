import { NavLink } from "react-router-dom";

export default function TableRow({ client }) {
  return (
    <tr>
      <td>
        <NavLink to={`/client/${client.id}`}>
          {client.last_name}, {client.first_name}
        </NavLink>
      </td>
      <td>{client.phone}</td>
      <td>{client.email}</td>
    </tr>
  );
}
