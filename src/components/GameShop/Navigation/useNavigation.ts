import { PATHS } from "@constants/GameShop/constants";

const useNavigation = () => {

  const isAddGamePage = location.pathname === PATHS.addGame;

  return {isAddGamePage}
}
export default useNavigation;