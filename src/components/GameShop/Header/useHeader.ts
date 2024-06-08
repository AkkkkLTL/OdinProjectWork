import { getGamesList } from "@api/GameShop/gameData";
import { setGames, setSearchedGames } from "@redux/GameShop/gamesSlice";
import { setIsOpenSearchGames } from "@redux/GameShop/harborSlice";
import { RootState } from "@redux/GameShop/types";
import { ChangeEvent, KeyboardEvent, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { createSearchParams } from "react-router-dom";

const useHeader = () => {
  const dispatch = useDispatch();
  const inputWrapperRef = useRef<HTMLElement>(null);
  const gamesState = useSelector(
    (state: RootState) => state.games
  );

  const { searchedGames } = gamesState;
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isModifyHeader, setIsModofyHeader] = useState(false);
  const [typingTimer, setTypingTimer] = useState<NodeJS.Timeout>();

  const setInputMaxWidth = (width: number) => {
    const targetStyle = inputWrapperRef.current?.style;
    if (targetStyle) targetStyle.maxWidth = `${width}px`;
  }

  const minimizeInput = () => {
    setIsInputFocused(false);
    setInputMaxWidth(300);
  }
  
  const handleSearchedGames = () => {
    if (searchedGames.length === 0) return;
    dispatch(setGames(searchedGames));
    dispatch(setIsOpenSearchGames(false));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      handleSearchedGames()
    }
  }

  const handleOnFocus = () => {
    setIsInputFocused(true);
    setInputMaxWidth(480);

    if (searchedGames.length !== 0) dispatch(setIsOpenSearchGames(true));
  }

  const handleOnChange = (e:ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === 1)
      setTimeout(() => {
        dispatch(setIsOpenSearchGames(true));
      }, 600);
    
    if (typingTimer) clearTimeout(typingTimer);

    const timer = setTimeout(async () => {
      const searchParams = createSearchParams({
        search: e.target.value,
      });
      dispatch(setSearchedGames([]));
      const gameList = await getGamesList({
        search: searchParams.toString(),
        search_precise: true,
      });
      // To get the games list

    }, 1200);

    setTypingTimer(timer);
  }
}