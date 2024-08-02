import axios from "axios";

const getClient = async (clientId) => {
  const response = await axios.get(`http://localhost:8080/clients/${clientId}`);
  return response.data;
};

export const useClientDetail = (clientId) => {
  return {
    queryKey: ["clients", "detail", clientId],
    queryFn: async () => getClient(clientId),
  };
};

export const clientLoader =
  (queryClient) =>
  async ({ params }) => {
    const query = useClientDetail(params.clientId);
    return (
      queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchQuery(query))
    );
  };
