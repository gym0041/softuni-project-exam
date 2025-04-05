import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  let error = useRouteError();
  return (
    <>
      <h1>Error</h1>
      <p>{error.message}</p>
    </>
  );
}
