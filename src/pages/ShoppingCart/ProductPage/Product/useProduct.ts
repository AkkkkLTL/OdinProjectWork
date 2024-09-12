import { useReducer } from "react";
import { initialLikeState, reducer } from "./constants";
import { IProps, LikeActionTypes } from "./types";

const useProduct = (props:IProps) => {
  const product = props.product;
  const [{likes, lastLike}, dispatch] = useReducer(reducer, initialLikeState);

  const handleAddClick = () => {
    props.onAddtoBasket();
  }

  const handleLikeClick = () => {
    dispatch({
      type: LikeActionTypes.LIKE,
      now: new Date()
    })
  }

  return {
    product,
    likes,
    lastLike,
    handleAddClick,
    handleLikeClick
  }
}

export default useProduct;