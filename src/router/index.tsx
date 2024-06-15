import { Navigate, createBrowserRouter } from "react-router-dom";
import { gameShopRouter } from "./GameShop";
import { routerTutorialRouter } from "./RouterTutorial";



export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={'/routertutorial'} />
  },
  // ...gameShopRouter,
  ...routerTutorialRouter,
], {
  basename: '/OdinProjectWork',
});