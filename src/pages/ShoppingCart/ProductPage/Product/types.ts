import { IProduct } from "@/types/ShoppingCart";

export interface IProps {
  product?: IProduct;
  inBasket: boolean;
  onAddtoBasket: () => void;
}

export interface ILikeState {
  likes:number;
  lastLike: Date | null;
}

export enum LikeActionTypes {
  LIKE = "LIKE"
}

export interface ILikeAction {
  type: LikeActionTypes.LIKE;
  now: Date;
}

export type LikeActions = ILikeAction;