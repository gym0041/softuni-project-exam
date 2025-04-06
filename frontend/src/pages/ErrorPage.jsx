import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  let error = useRouteError();
  let errMessage = error.message || "Something went wrong";
  if (error.status === 404) {
    errMessage = "The page you are looking for is not found";
  }
  return (
    <>
      <h1>Error</h1>
      <p>{errMessage}</p>
    </>
  );
}
