import { GENRES, PLATFORMS, RELEASES, TOP_GAMES } from "@constants/GameShop/constants";
import { nanoid } from "nanoid";

export const filters = [
  {
    id: nanoid(),
    header: 'NewReleases',
    options: RELEASES,
  },
  {
    id: nanoid(),
    header: 'Top',
    options: TOP_GAMES,
  },
  {
    id:nanoid(),
    header: 'Platforms',
    options: PLATFORMS,
  },
  {
    id: nanoid(),
    header: 'Genres',
    options: GENRES,
  }
];