import { useQuery } from "@tanstack/react-query";
import {
  NavLink,
  useLoaderData,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useClientDetail } from "../hooks/useClientDetail";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect } from "react";

export default function BalanceUpdate() {
  const { clientId } = useParams();
  const initialData = useLoaderData();
  const { data } = useQuery({
    ...useClientDetail(clientId),
    initialData,
  });

  const { register, handleSubmit, setValue } = useForm();

  const navigate = useNavigate();

  const updateBalance = (id, data) => {
    axios
      .patch(`http://localhost:8080/clients/${id}/balance`, data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        navigate(`/client/${id}`);
      })
      .catch((err) => console.log(err));
  };

  const onSubmit = (data) => {
    updateBalance(clientId, data);
  };

  useEffect(() => {
    setValue("balance", data.balance);
  });

  return (
    <div>
      <h1>
        {data.last_name}, {data.first_name}
      </h1>
      <hr></hr>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Update Balance</h2>
        <p>Current balance: {data.balance}</p>
        <div className="form-group">
          <label for="balance">New Balance:</label>
          <input
            type="number"
            id="balance"
            name="balance"
            className="form-control w-25"
            {...register("balance")}
          />
        </div>
        <button className="btn btn-primary mt-3" type="submit">
          Update
        </button>
        <NavLink to={`/client/${clientId}`} className="btn btn-danger mt-3">
          Cancel
        </NavLink>
      </form>
    </div>
  );
}
