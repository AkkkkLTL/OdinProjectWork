import { IGames, IOptions } from "@custypes/game-shopping";

export type PlatformsAndGenres = "Platforms" | "Genres";
export type PublishersAndDevelopers = "Publishers" | "Developers";
export type TitleT = PlatformsAndGenres | PublishersAndDevelopers;

export type GameDetailsT = {
  id: string,
  title: string,
  name: keyof IGames,
  isRequired?: boolean,
  placeholder: string,
  emoji: string,
  description: string,
  inputDescription: string,
  inputPlaceholder: string,
  optionsList?: IOptions[],
}