import { ILikeAction, ILikeState, LikeActionTypes } from "./types"

export const initialLikeState:ILikeState = {
  likes: 0,
  lastLike: null
}

export const reducer = (state:ILikeState = initialLikeState, action: ILikeAction) => {
  switch (action.type) {
    case LikeActionTypes.LIKE:
      return {
        ...state,
        likes: state.likes + 1,
        lastLike: action.now
      }
  }
  return state;
}