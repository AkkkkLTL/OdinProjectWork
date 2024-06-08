/**
 * Req & Res Interfaces
 */
// Interface: Request Games
export interface ReqGameList {
  page?: number,
  page_size?: number,
  parent_platforms?: string,
  dates?: string,
  genres?: string,
  ordering?: string,
  search?:string,
  search_precise?: boolean,
}

// Interface: Common ResponseSchema(RAWG or Personal)
interface ResSchema<T> {
  results?: T[],
  data?: T[],
}

/**
 * Req & Res Types
 */
// Type: The Response to get Games list
export type ResGamesList = ResSchema<GameShop.BasicGame>;
export type ResGameDetail = GameShop.GameDetail;
export type ResScreenShots = ResSchema<GameShop.ScreenShot>;