import { Navigate, createBrowserRouter } from "react-router-dom";
import { gameShopRouter } from "./GameShop";
import { routerTutorialRouter } from "./RouterTutorial";
import { libraryRouter } from "./Library";
import { routerShoppingCart } from "./ShoppingCart";



export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={'/library/books'} />
  },
   ...libraryRouter,
  // ...gameShopRouter,
  //...routerTutorialRouter,
  ...routerShoppingCart
], {
  basename: '/OdinProjectWork',
});