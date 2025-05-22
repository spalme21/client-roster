import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../auth/AuthProvider";
import { useState } from "react";

function LogIn() {
  const [message, setMessage] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const auth = useAuth();

  const onSubmit = (data) => {
    auth.loginAction(data).then((res) => setMessage(res));
  };

  // if (auth.token) return <Navigate to="/dashboard" />;

  return (
    <div className="row d-flex align-items-center py-4 bg-body-tertiary h-100">
      <div className="form m-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="h3 mb-3 fw-normal">Log In</h1>
          <div className="form-floating">
            <input
              type="email"
              className="form-control first-input"
              id="email"
              placeholder="email@example.com"
              autoComplete="email"
              {...register("email", {
                required: "*Enter email to login",
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
              type="password"
              className="form-control last-input"
              id="password"
              placeholder="Password"
              {...register("password", {
                required: "*Enter your password to login",
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
          {message && (
            <span className="text-danger fw-lighter fst-italic">{message}</span>
          )}
          <button className="btn btn-primary w-100 py-2 mb-1" type="submit">
            Log In
          </button>
        </form>
        <p>
          Don't have an account?{" "}
          <NavLink
            className="link-underline link-underline-opacity-0"
            to="/signup"
          >
            Sign Up
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default LogIn;
