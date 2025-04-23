import { setDevelopers, setGenres, setPlatforms, setPublishers, setSelectedGenres, setSelectedPlatforms } from "@redux/GameShop/addGameSlice";
import { RootState } from "@/redux/GameShop/types"
import { useSelector } from "react-redux"

export const useSelectionedOptions = () => {
  const addGamesState = useSelector(
    (state: RootState) => state.addGame
  );
  const {
    platforms,
    genres,
    selectedPlatforms,
    selectedGenres,
    publishers,
    developers,
  } = addGamesState;

  const optionsList = {
    Platforms: platforms,
    Genres: genres,
    Publishers: publishers,
    Developers: developers,
  }

  const selectedOptionList = {
    Playforms: selectedPlatforms,
    Genres: selectedGenres,
    Publishers: publishers,
    Developers: developers,
  };

  const setOptionsList = {
    Platforms: setPlatforms,
    Genres: setGenres,
  };

  const setSelectedOptionList = {
    Platforms: setSelectedPlatforms,
    Genres: setSelectedGenres,
    Publishers: setPublishers,
    Developers: setDevelopers,
  };

  return {
    optionsList,
    selectedOptionList,
    setOptionsList,
    setSelectedOptionList,
  }
}