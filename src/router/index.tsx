import { Navigate, createBrowserRouter } from "react-router-dom";
import { gameShopRouter } from "./GameShop";
import { routerTutorialRouter } from "./RouterTutorial";
import { libraryRouter } from "./Library";



export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={'/library'} />
  },
  ...libraryRouter,
  // ...gameShopRouter,
  ...routerTutorialRouter,
], {
  basename: '/OdinProjectWork',
});