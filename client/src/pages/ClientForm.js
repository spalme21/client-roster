import { useForm } from "react-hook-form";
import axios from "axios";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

export default function ClientForm() {
  // const [clientExists, setClientExists] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const createClient = (data) => {
    axios
      .post("http://localhost:8080/clients/add", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        // console.log(response.data.clientExists);
        // if (response.data.clientExists) {
        //   setClientExists(true);
        // } else {
        navigate("/roster");
        // }
      })
      .catch((err) => console.log(err));
    // return response;
  };

  const mutation = useMutation({ mutationFn: createClient });

  const onSubmit = (data, e) => {
    e.preventDefault();
    mutation.mutate(data);
    // if (response.data.clientExists) {
    //   setClientExists(true);
    // } else {
    //   navigate("/roster");
    // }
    // await axios
    //   .post("http://localhost:8080/clients/add", data, {
    //     headers: { "Content-Type": "application/json" },
    //   })
    //   .then((response) => {
    //     if (!response.data.clientExists) {
    //       navigate("/roster");
    //     } else {
    //       setClientExists(true);
    //     }
    //   })
    //   .catch((err) => console.log(err));
    // e.target.reset();
  };

  return (
    <div className="d-flex align-items-center bg-body-tertiary h-100">
      <div className="form m-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="h3">Add a new client:</h1>
          <div className="form-floating">
            <input
              className="form-control first-input"
              name="firstName"
              id="first-name"
              placeholder="First"
              autoComplete="given-name"
              {...register("firstName", {
                required: "*First name is required",
              })}
            />
            <label htmlFor="first-name">
              First Name{" "}
              {errors.firstName && (
                <span className="text-danger fw-lighter fst-italic">
                  {errors.firstName.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-floating">
            <input
              className="form-control middle-input"
              name="lastName"
              id="last-name"
              placeholder="Last"
              autoComplete="family-name"
              {...register("lastName", {
                required: "*Last name is required",
              })}
            />
            <label htmlFor="last-name">
              Last Name{" "}
              {errors.lastName && (
                <span className="text-danger fw-lighter fst-italic">
                  {errors.lastName.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-floating">
            <input
              className="form-control middle-input"
              type="email"
              name="email"
              id="email"
              placeholder="email@email.com"
              autoComplete="email"
              {...register("email", {
                required: "*Email is required",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "*Invalid email address",
                },
              })}
            />
            <label htmlFor="email">
              Email{" "}
              {errors.email && (
                <span className="text-danger fw-lighter fst-italic">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-floating">
            <input
              className="form-control middle-input"
              name="phone"
              id="phone"
              placeholder="xxx-xxx-xxxx"
              autoComplete="tel-national"
              {...register("phone", {
                required: "*Phone is required",
                pattern: {
                  value: /^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/,
                  message: "*Invalid phone number",
                },
              })}
            />
            <label htmlFor="phone">
              Phone{" "}
              {errors.phone && (
                <span className="text-danger fw-lighter fst-italic">
                  {errors.phone.message}
                </span>
              )}
            </label>
          </div>
          <button className="btn btn-primary w-100" type="submit">
            Submit
          </button>
        </form>
        {/* {clientExists && (
          <span className="text-danger fw-lighter fst-italic">
            A client with this name already exists!
          </span>
        )} */}
      </div>
    </div>
  );
}
