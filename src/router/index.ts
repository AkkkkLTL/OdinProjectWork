import { createBrowserRouter } from "react-router-dom";
import { gameShopRouter } from "./GameShop";



export const router = createBrowserRouter([
  ...gameShopRouter,
], {
  basename: '/OdinProjectWork',
});