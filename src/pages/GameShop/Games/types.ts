import { TResGamesList } from "@api/GameShop/types"
import { IGames } from "@custypes/game-shopping"

export type MainProps = {
  $isList: boolean,
}

export type OverflowTypes = {
  $isHideSidebar: boolean,
}

export type TLoadGames = {
  games?: TResGamesList
  inCartGames?: IGames[],
  getGames?: () => Promise<TResGamesList> | undefined,
}