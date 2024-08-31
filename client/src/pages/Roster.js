import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import TableRow from "../components/TableRow";
import { NavLink, useLoaderData } from "react-router-dom";

const getClients = async () => {
  const response = await axios.get("http://localhost:8080/clients/");
  return response.data;
};

const clientsQuery = () => ({
  queryKey: ["clients"],
  queryFn: getClients,
});

export const loader = (queryClient) => async () => {
  return queryClient.ensureQueryData(clientsQuery());
};

export default function Roster() {
  const initialData = useLoaderData();
  const { data } = useQuery({ ...clientsQuery(), initialData });

  const tableRows = data.clients.map((client) => (
    <TableRow key={client.id} client={client} />
  ));

  return (
    <>
      <NavLink className="" to="/add-client">
        New Client
      </NavLink>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Credits</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </>
  );
}
