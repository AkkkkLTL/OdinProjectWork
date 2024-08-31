import { ReactNode } from "react";

export interface ITabsProps {
  children?: ReactNode;
}

export interface ITabsContext {
  activeName?: string;
  handleTabClick?: (name:string, content:ReactNode) => void;
}
