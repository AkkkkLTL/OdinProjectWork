import { FC, MouseEvent, useContext } from "react";
import { TabsContext } from "../context";
import { ITabProps } from "./types";

const Tab:FC<ITabProps> = props => {
  const context = useContext(TabsContext);

  if (!context.activeName && props.initialActive) {
    if (context.handleTabClick) {
      context.handleTabClick(props.name, props.children);
      return null;
    }
  }

  const activeName = context.activeName ?
                    context.activeName : props.initialActive ? 
                    props.name : "";

  const handleTabClick = (e:MouseEvent<HTMLLIElement>) => {
    if (context.handleTabClick) {
      context.handleTabClick(props.name, props.children);
    }
  };
  
  return (
    <li
      onClick={handleTabClick}
      className={props.name === activeName ? "active" : ""}
    >
      {props.heading()}
    </li>
  )
}

export default Tab;