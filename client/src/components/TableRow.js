import { NavLink } from "react-router-dom";
import { formatPhone } from "../utils/formatPhone";

export default function TableRow({ client }) {
  const formattedPhone = formatPhone(client.phone);

  return (
    <tr>
      <td>
        <NavLink to={`/client/${client.id}`}>
          {client.last_name}, {client.first_name}
        </NavLink>
      </td>
      <td>{formattedPhone}</td>
      <td>{client.email}</td>
      <td>{client.balance}</td>
    </tr>
  );
}
