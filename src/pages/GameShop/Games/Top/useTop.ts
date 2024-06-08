import { setGames } from "@redux/GameShop/gamesSlice";
import { setCurrentOrder } from "@redux/GameShop/harborSlice";
import { RootState } from "@redux/GameShop/types";
import { MouseEvent, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useTop = () => {
  const dispatch = useDispatch();
  const harborState = useSelector((state: RootState) => state.harbor);
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const orderRef = useRef<HTMLUListElement>(null);

  const { currentFilter, currentOrder } = harborState;

  const openAndHideOrder = () => {
    setIsOrderOpen(!isOrderOpen);
  }

  const _changeTitle = (e: MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const { textContent } = target;

    if (textContent != null) dispatch(setCurrentOrder(textContent.trim())); 
  }

  const handleOptionClick = (e: MouseEvent<HTMLElement>) => {
    _changeTitle(e);
    openAndHideOrder();
    dispatch(setGames([]));
  }

  return {
    currentFilter, currentOrder,
    isOrderOpen, orderRef,
    openAndHideOrder,
    handleOptionClick,
  }
}

export default useTop;