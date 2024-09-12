import { FC } from "react";
import "./styles.scss";

interface IProps {
  count: number;
}

const BasketSummary:FC<IProps> = (props) => {
  return (
    <div className="basket-summary">{props.count}</div>
  )
}

export default BasketSummary;