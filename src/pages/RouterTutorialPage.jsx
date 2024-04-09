import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "../components/router-tutorial/index.css";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "../components/router-tutorial/routes/root";
import ErrorPage from "../components/router-tutorial/error-page";
import Contact, {
  loader as contactLoader,
  action as contactAction,
} from "../components/router-tutorial/routes/contact";
import EditContact, {
  action as editAction,
} from "../components/router-tutorial/routes/edit";
import { action as destroyAction } from "../components/router-tutorial/routes/destroy";
import Index from "../components/router-tutorial/routes";

const router = createBrowserRouter([
  {
    path: "/routertutorial",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {index: true, element: <Index />},
          {
            path: "contacts/:contactId",
            element: <Contact />,
            loader: contactLoader,
            action: contactAction,
          },
          {
            path: "contacts/:contactId/edit",
            element: <EditContact />,
            loader: contactLoader,
            action: editAction,
          },
          {
            path: "contacts/:contactId/destroy",
            action: destroyAction,
            errorElement: <div>Oops! There was an error</div>
          }
        ]
      }
    ]
  },
]);

export default function RouterTutorialPage() {
  return (
    <RouterProvider router={router} />
  )
}