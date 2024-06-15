import { useRouteError } from "react-router-dom"
import { ErrorData } from "./types";
import { ErrorMain } from "./styles";

export const ErrorPage = () => {
  const error = useRouteError() as ErrorData;
  console.error(error);

  return (
    <ErrorMain>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </ErrorMain>
  )
}