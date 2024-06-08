import { RouteObject } from "react-router-dom";
import { PATHS } from "@constants/GameShop/constants";
import { Home } from "@pages/GameShop/Home";
import Games from "@pages/GameShop/Games";
import Game from "@pages/GameShop/Game";
import AddGame from "@pages/GameShop/AddGame";

export const gameShopRouter:RouteObject[] = [
  {
    path: PATHS.home,
    lazy: async () => {
      let { GameShopApp } = await import("@pages/GameShop");
      return { Component: GameShopApp };
    },
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: PATHS.games,
        element: <Games />
      },
      /*{
        path: PATHS.game,
        element: <Game />
      },
      {
        path: PATHS.addGame,
        element: <AddGame />
      }*/
    ]
  },
]