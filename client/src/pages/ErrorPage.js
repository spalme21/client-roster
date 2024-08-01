import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="h-100 d-flex justify-content-center align-items-center">
      <div className="col-md-12 text-center">
        <h1>Oops!</h1>
        <p>Sorry, an error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
