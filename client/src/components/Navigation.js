import { NavLink } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

export default function Navigation() {
  const user = useAuth();

  return (
    <>
      <header className="navbar flex-md-nowrap sticky-top navbar-dark bg-dark p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="/">
          Sports Performance
        </a>
        <ul className="navbar-nav flex-row ">
          {user.token ? (
            <>
              <li className="nav-item text-nowrap">
                <button
                  onClick={user.logOut}
                  className="nav-link px-3 text-white"
                >
                  Log out
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item text-nowrap">
                <NavLink className="nav-link px-3 text-white" to="/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link px-3 text-white" to="/signup">
                  Sign-Up
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </header>
    </>
  );
}
