import { deleteData, getData, postData } from "@api/helpers";

const API_URL = import.meta.env.VITE_CGAME_API_URL;

export const getAllGames = async () => {
  return getData(
    `${API_URL}`
  ).then((res) => {
    console.log(res);
  });
}

export const getGame = async (id:string) => {
  return getData(
    `${API_URL}/${id}`
  ).then((res) => {
    console.log(res);
  });
}

export const createGame = (data: GameShop.GameDetail) => {
  return postData<{data:GameShop.GameDetail}>(
    `${API_URL}/game/create`, 
    data
  ).then((res) => {
    console.log(res);
  });
}

export const deleteGame = async (id:string | number) => {
  return deleteData(
    `${API_URL}/${id}`
  ).then((res) => {
    console.log(res);
  });
}