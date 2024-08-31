import { ReactNode } from "react";

export interface ITabProps {
  name: string;
  initialActive?: boolean;
  children?: ReactNode;
  heading: () => string | ReactNode;
}