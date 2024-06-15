/*
* Game Shopping config
*/

import { 
  mdiAndroid, 
  mdiApple, 
  mdiBoxingGlove, 
  mdiChessKnight, 
  mdiChessQueen, 
  mdiFire, 
  mdiFlagCheckered, 
  mdiImageFilterHdr, 
  mdiMicrosoftWindows, 
  mdiMicrosoftXbox, 
  mdiNintendoSwitch, 
  mdiPistol, mdiPoll, 
  mdiPuzzle, mdiRugby, 
  mdiSkipForward, mdiSonyPlaystation, 
  mdiStarBox, mdiSwordCross, mdiTrophyVariant } from "@mdi/js";
import Icon from "@mdi/react";
import { nanoid } from "nanoid";
import { previousYear } from "@pages/GameShop/Games/helpers";

export enum PATHS {
  home = '/gameshop',
  games = 'games',
  game = 'games/game/:id',
  addGame = 'add-game',
}

export const FILTER_TITLE = {
  ADDED_GAMES: 'Added Games',
  LAST_30_DAY: 'Last 30 Days',
  THIS_WEEK: 'This Week',
  NEXT_WEEK: 'Next Week',
  BEST_OF_THE_YEAR: 'Best of the Year',
  POPULAR_PREV_YEAR: `Popular in ${previousYear}`,
  ALL_TIME_TOP: 'All time top',
  PC: 'PC',
  PS: 'PlayStation',
  XBOX: 'Xbox One',
  NINTENDO: 'Nintendo Switch',
  IOS: 'iOS',
  ANDROID: 'Android',
  ACTION: 'Action',
  STRATEGY: 'Strategy',
  RPG: 'RPG',
  SHOOTER: 'Shooter',
  ADVENTUER: 'Adventure',
  PUZZLE: 'Puzzle',
  RACING: 'Racing',
  SPORTS: 'Sports',
};

export const ORDER_TITLE = {
  NAME: 'Name',
  RELEASE: 'Release date',
  POPULARITY: 'Popularity',
  RATING: 'Rating',
};


export const RELEASES = [
  {
    id: nanoid(),
    name: FILTER_TITLE.LAST_30_DAY,
    icon: <Icon path={mdiStarBox} size={1} />,
  },
  {
    id: nanoid(),
    name: FILTER_TITLE.THIS_WEEK,
    icon: <Icon path={mdiFire} size={1} />,
  },
  {
    id: nanoid(),
    name: FILTER_TITLE.NEXT_WEEK,
    icon: <Icon path={mdiSkipForward} size={1} />,
  }
];

export const TOP_GAMES = [
  {
    id: nanoid(),
    name: FILTER_TITLE.BEST_OF_THE_YEAR,
    icon: <Icon path={mdiTrophyVariant} size={1} />,
  },
  {
    id: nanoid(),
    name: FILTER_TITLE.POPULAR_PREV_YEAR,
    icon: <Icon path={mdiPoll} size={1} />,
  },
  {
    id: nanoid(),
    name: FILTER_TITLE.ALL_TIME_TOP,
    icon: <Icon path={mdiChessQueen} size={1} />,
  }
];

export const PLATFORMS: GameShop.Option[] = [
  {
    id: nanoid(),
    name: FILTER_TITLE.PC,
    icon: <Icon path={mdiMicrosoftWindows} size={1} />,
    slug: 'pc',
  },
  {
    id: nanoid(),
    name: FILTER_TITLE.PS,
    icon: <Icon path={mdiSonyPlaystation} size={1} />,
    slug: 'playstation',
  },
  {
    id: nanoid(),
    name: FILTER_TITLE.XBOX,
    icon: <Icon path={mdiMicrosoftXbox} size={1} />,
    slug: 'xbox',
  },
  {
    id: nanoid(),
    name: FILTER_TITLE.NINTENDO,
    icon: <Icon path={mdiNintendoSwitch} size={1} />,
    slug: 'nintendo',
  },
  {
    id: nanoid(),
    name: FILTER_TITLE.IOS,
    icon: <Icon path={mdiApple} size={1} />,
    slug: 'mac',
  },
  {
    id: nanoid(),
    name: FILTER_TITLE.ANDROID,
    icon: <Icon path={mdiAndroid} size={1} />,
    slug: 'android',
  },
];

export const GENRES = [
  {
    id: nanoid(),
    name: FILTER_TITLE.ACTION,
    icon: <Icon path={mdiBoxingGlove} size={1} rotate={90} />,
  },
  {
    id: nanoid(),
    name: FILTER_TITLE.STRATEGY,
    icon: <Icon path={mdiChessKnight} size={1} />,
  },
  {
    id: nanoid(),
    name: FILTER_TITLE.RPG,
    icon: <Icon path={mdiSwordCross} size={1} />
  },
  {
    id: nanoid(),
    name: FILTER_TITLE.SHOOTER,
    icon: <Icon path={mdiPistol} size={1} />
  },
  {
    id: nanoid(),
    name: FILTER_TITLE.ADVENTUER,
    icon: <Icon path={mdiImageFilterHdr} size={1} />,
  },
  {
    id: nanoid(),
    name: FILTER_TITLE.PUZZLE,
    icon: <Icon path={mdiPuzzle} size={1} />,
  },
  {
    id: nanoid(),
    name: FILTER_TITLE.RACING,
    icon: <Icon path={mdiFlagCheckered} size={1} />,
  },
  {
    id: nanoid(),
    name: FILTER_TITLE.SPORTS,
    icon: <Icon path={mdiRugby} size={1} />,
  },
]