import { useQuery } from "@tanstack/react-query";
import { NavLink, useLoaderData, useParams } from "react-router-dom";
import { useClientDetail } from "../hooks/useClientDetail";

export default function ClientDetail() {
  const initialData = useLoaderData();
  const params = useParams();
  const { data } = useQuery({
    ...useClientDetail(params.clientId),
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
          <p className="col text-center">
            <b>Phone:</b> {formattedPhone}
          </p>
          <p className="col text-center">
            <b>Email:</b> {data.email}
          </p>
        </div>
        <NavLink to={`/client/${params.clientId}/edit`}>Edit</NavLink>
      </div>
    </div>
  );
}
