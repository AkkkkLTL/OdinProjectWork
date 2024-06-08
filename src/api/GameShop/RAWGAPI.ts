import { getData } from "@api/helpers";
import { 
  ReqGameList,
  ResGameDetail,
  ResGamesList,
  ResScreenShots,
} from "./types";

const GAMELIB_URL = import.meta.env.VITE_RAWG_API_URL;
const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

/**
 * Get Game List according param
 * 
 * @param param Req param
 * @returns Game List info
 */
export const getGamesList = (param: ReqGameList) => {
  if (API_KEY !== undefined)
  {
    Object.assign(param, {key: API_KEY});
    return getData<ResGamesList>(
      `${GAMELIB_URL}/games`, 
      param as Record<string, string>
    );
  }
  throw new Error("Api key is undefined");
};

/**
 * Get Game Detail accoring GameID
 * 
 * @param id game id
 * @returns game detail info
 */
export const getGameDetail = (id: string | number) => {
  if (API_KEY !== undefined)
  {
    return getData<ResGameDetail>(
      `${GAMELIB_URL}/games/${id}`,
      {key: API_KEY} as Record<string, string>
    );
  }
  throw new Error("Api key is undefined");
};

/**
 * Get Game Screen Shots (including background image)
 * 
 * @param {string | number} id game id
 * @returns game's screen shot list
 */
export const getGameScreenshots = (id: string | number) => {
  if (API_KEY !== undefined)
  {
    return getData<ResScreenShots>(
      `${GAMELIB_URL}/games/${id}/screenshots`,
      {key: API_KEY} as Record<string, string>
    ).then((res) => {return res?.results});
  }
  throw new Error("Api key is undefined");
}
