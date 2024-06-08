export const saveToLocalStorage = (
  name: string,
  item: string | number | GameShop.BasicGame[],
) => localStorage.setItem(name, JSON.stringify(item));

export const getFromLocalStorage = <T>(
  name: string,
):T => JSON.parse(localStorage.getItem(name) as string) as T;