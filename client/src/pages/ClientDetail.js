import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useLoaderData, useParams } from "react-router-dom";

const getClient = async (clientId) => {
  const response = await axios.get(`http://localhost:8080/clients/${clientId}`);
  console.log(response);
  return response.data;
};

const clientDetailQuery = (clientId) => ({
  queryKey: ["clients", "detail", clientId],
  queryFn: async () => getClient(clientId),
});

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const query = clientDetailQuery(params.clientId);
    return (
      queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchQuery(query))
    );
  };

export default function ClientDetail() {
  const initialData = useLoaderData();
  const params = useParams();
  const { data } = useQuery({
    ...clientDetailQuery(params.clientId),
    initialData,
  });

  console.log(data);
  const formattedPhone = `(${data.phone.substring(0, 3)})${data.phone.substring(
    3,
    6
  )}-${data.phone.substring(6)}`;

  return (
    <div>
      <h1>
        {data.last_name}, {data.first_name}
      </h1>
      <hr></hr>
      <div className="container">
        <div className="row">
          <h3>Contact Info</h3>
        </div>
        <div className="row">
          <p className="col text-center">{formattedPhone}</p>
          <p className="col text-center">{data.email}</p>
        </div>
      </div>
    </div>
  );
}
