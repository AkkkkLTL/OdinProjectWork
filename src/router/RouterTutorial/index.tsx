import { Root } from "@pages/RouterTutorial";
import { ContactPage } from "@pages/RouterTutorial/Contact";
import { EditContact } from "@pages/RouterTutorial/Edit";
import { ErrorPage } from "@pages/RouterTutorial/Error";
import { Index } from "@pages/RouterTutorial/Home";
import type { RouteObject } from "react-router-dom";
import { rootAction } from "./actions/root.action";
import { contactAction } from "./actions/contact.action";
import { deleteAction } from "./actions/delete.action";
import { editAction } from "./actions/edit.action";
import { rootLoader } from "./loaders/root.loader";
import { contactLoader } from "./loaders/contact.loader";

export const routerTutorialRouter:RouteObject[] = [
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
            element: <ContactPage />,
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
            path: "contacts/:contactId/delete",
            action: deleteAction,
            errorElement: <div>Oops! There was an error</div>
          }
        ]
      }
    ]
  }
]