import { Navigate, createBrowserRouter } from "react-router-dom";
import * as React from "react";

import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./components/router-tutorial/routes/root";
import ErrorPage from "./components/router-tutorial/error-page";
import Contact, {
  loader as contactLoader,
  action as contactAction,
} from "./components/router-tutorial/routes/contact";
import EditContact, {
  action as editAction,
} from "./components/router-tutorial/routes/edit";
import { action as destroyAction } from "./components/router-tutorial/routes/destroy";
import Index from "./components/router-tutorial/routes";


import { lazy } from "react";
import DashboardApp from "./pages/dashboard/DashboardApp";

const CVAppPage = lazy(() => import("./pages/CVAppPage"));
const RouterTutorialPage = lazy(() => import("./pages/RouterTutorialPage"));

/* export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/Home" />
  },
  {
    path: "/Home",
    element: <DashboardApp />
  },
  {
    path: "/cv-app",
    element: <CVAppPage />
  },
  {
    path: "/routertutorial",
    element: <RouterTutorialPage />,
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
],{
  basename: '/OdinProjectWork',
})*/

export const router = createBrowserRouter([
  
],{
  basename: '/OdinProjectWork',
})