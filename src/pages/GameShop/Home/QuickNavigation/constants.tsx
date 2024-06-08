import Icon from "@mdi/react";
import { nanoid } from "nanoid";

import { 
  ALL_TIME_TOP_ICON,
  BEST_OF_THE_YEAR_ICON,
  LAST_30_DAY_ICON,
  PLAY_DICE_ICON,
  POPULAR_PREV_YEAR_ICON,
} from "@assets/icons/GameShop";
import { FILTER_TITLE, PATHS } from "@constants/GameShop/constants";


const places = [
  {
    id: nanoid(), 
    name: 'Play Dice', 
    icon: <Icon path={PLAY_DICE_ICON} size={1} />,
    place: PATHS.game,
    color: '#9966cc',
  },
  {
    id: nanoid(),
    name: FILTER_TITLE.LAST_30_DAY,
    icon: <Icon path={LAST_30_DAY_ICON} size={1} />,
    place: PATHS.games,
    color: '#0790F3',
  },
  {
    id: nanoid(),
    name: FILTER_TITLE.POPULAR_PREV_YEAR,
    icon: <Icon path={POPULAR_PREV_YEAR_ICON} size={1} />,
    place: PATHS.games,
    color: '#1eff0099',
  },
  {
    id: nanoid(),
    name: FILTER_TITLE.BEST_OF_THE_YEAR,
    icon: <Icon path={BEST_OF_THE_YEAR_ICON} size={2} />,
    place: PATHS.games,
    color: '#ff8800c3',
  },
  {
    id: nanoid(),
    name: FILTER_TITLE.ALL_TIME_TOP,
    icon: <Icon path={ALL_TIME_TOP_ICON} size={1} />,
    place: PATHS.games,
    color: '#f36060',
  },
];

export default places;