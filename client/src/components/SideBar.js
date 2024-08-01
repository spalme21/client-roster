import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar border border-right col-1 col-sm-1 col-md-3 col-lg-2 p-0 bg-body-tertiary">
      <div className="d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink
              className="nav-link d-flex align-items-center gap-2"
              to="/dashboard"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="mx-auto mx-md-0 bi bi-house-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
                <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" />
              </svg>
              <span className="d-none d-md-block">Dashboard</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link d-flex align-items-center gap-2"
              to="/roster"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="mx-auto mx-md-0 bi bi-person-lines-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
              </svg>
              <span className="d-none d-md-block">Roster</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
