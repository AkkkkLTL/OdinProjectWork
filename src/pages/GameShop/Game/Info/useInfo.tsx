import { RootState } from "@redux/GameShop/types";
import { useState } from "react";
import { useSelector } from "react-redux";

const useInfo = () => {
  const gameDetail = useSelector(
    (state: RootState) => state.games.gameDetail
  );
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const openAndHideMoreInfo = () => {
    setShowMoreInfo(!showMoreInfo);
  }

  const getReleaseDate = () => {
    const release = gameDetail.released
    if (!release) return 'Release date is not provided';

    return release?.replace(/\-/g, '/');
  }

  return {
    gameDetail,
    showMoreInfo,
    openAndHideMoreInfo,
    getReleaseDate,
  }
}

export default useInfo;