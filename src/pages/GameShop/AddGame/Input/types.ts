import { IGames } from "@custypes/game-shopping"

export type InputProps = {
  type: string,
  name: keyof IGames,
  title: string,
  placeHolder?: string,
  required?: boolean,
  icon?: JSX.Element,
  onClick?: () => void,
}