import { useQuery } from "@tanstack/react-query";
import { NavLink, useLoaderData, useParams } from "react-router-dom";
import { useClientDetail } from "../hooks/useClientDetail";
import { formatPhone } from "../utils/formatPhone";

export default function ClientDetail() {
  const initialData = useLoaderData();
  const params = useParams();
  const { data } = useQuery({
    ...useClientDetail(params.clientId),
    initialData,
  });

  const formattedPhone = formatPhone(data.phone);

  return (
    <div>
      <div className="row align-items-center">
        <h1 className="col">
          {data.last_name}, {data.first_name}
        </h1>
        <NavLink className="btn btn-secondary btn-sm me-2 col-2" to="edit">
          Edit
        </NavLink>
        <NavLink className="btn btn-danger btn-sm col-2" to="delete">
          Delete
        </NavLink>
      </div>

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
      </div>
      <hr></hr>
      <div className="container">
        <div className="row">
          <h3 className="col m-auto">Balance:</h3>
          <p className="col m-auto">{data.balance}</p>
          <NavLink className="col btn btn-secondary btn-sm" to="update-balance">
            Update Balance
          </NavLink>
        </div>
      </div>
    </div>
  );
}
