import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { redirect } from "react-router-dom";

function SignUp() {
  const [userExists, setUserExists] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    axios
      .post("http://localhost:8080/trainer/register", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        if (response.data.userExists) {
          setUserExists(true);
        } else {
          return redirect("/login");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex align-items-center bg-body-tertiary h-100">
      <div className="form m-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="h3">Sign up for an account:</h1>
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
              {...register("lastName", { required: "*Last name is required" })}
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
          {/* <div className="form-floating">
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
          </div> */}
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
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              autoComplete="new-password"
              {...register("password", {
                required: "*Password is required",
                minLength: {
                  value: 8,
                  message: "*Must be at least 8 characters long",
                },
              })}
            />
            <label htmlFor="password">
              Password{" "}
              {errors.password && (
                <span className="text-danger fw-lighter fst-italic">
                  {errors.password.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-floating">
            <input
              className="form-control last-input"
              type="password"
              name="confirmPassword"
              id="confirm-password"
              placeholder="Password"
              autoComplete="new-password"
              {...register("confirmPassword", {
                required: "*Confirm your password",
                validate: (value) =>
                  value === watch("password") || "*Your password must match",
              })}
            />
            <label htmlFor="confirm-password">
              Confirm Password{" "}
              {errors.confirmPassword && (
                <span className="text-danger fw-lighter fst-italic">
                  {errors.confirmPassword.message}
                </span>
              )}
            </label>
          </div>
          <button className="btn btn-primary w-100" type="submit">
            Submit
          </button>
        </form>
        {userExists && (
          <span className="text-danger fw-lighter fst-italic">
            An account with this email already exists!
          </span>
        )}
      </div>
    </div>
  );
}

export default SignUp;
