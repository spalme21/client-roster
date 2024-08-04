import { useQuery } from "@tanstack/react-query";
import { NavLink, useLoaderData, useParams } from "react-router-dom";
import { useClientDetail } from "../hooks/useClientDetail";
import axios from "axios";
import { useState } from "react";

export default function ClientDelete() {
  const initialData = useLoaderData();
  const params = useParams();
  const { data } = useQuery({
    ...useClientDetail(params.clientId),
    initialData,
  });

  const [isDeleted, setIsDeleted] = useState(false);

  const deleteClient = (clientId) => {
    axios
      .delete(`http://localhost:8080/clients/${clientId}/delete`)
      .then(setIsDeleted(true))
      .catch((err) => console.log(err));
  };

  return (
    <>
      {!isDeleted ? (
        <div>
          <h1>
            Delete {data.first_name} {data.last_name}?
          </h1>
          <hr></hr>
          <p>Are you sure you want to delete this client?</p>
          <p> This action cannot be undone.</p>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => deleteClient(params.clientId)}
          >
            Delete
          </button>
          <NavLink
            className="btn btn-secondary"
            to={`/client/${params.clientId}`}
          >
            Nevermind
          </NavLink>
        </div>
      ) : (
        <div>
          <h1>Client successfully deleted</h1>
          <NavLink to="/roster">Return to roster</NavLink>
        </div>
      )}
    </>
  );
}
