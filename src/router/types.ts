import { RouteObject } from "react-router-dom";

export type RouteType = RouteObject & {
  title?: string,
}