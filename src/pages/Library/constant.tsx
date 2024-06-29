import { mdiBookOpenPageVariant, mdiViewDashboard } from "@mdi/js";
import Icon from "@mdi/react";
import { nanoid } from "nanoid";

export const NavConfig = [
  {
    id: nanoid(),
    title: "Dashboard",
    path: "./",
    icon: <Icon path={mdiViewDashboard} size={1} />
  },
  {
    id: nanoid(),
    title: "Book",
    path: "./books",
    icon: <Icon path={mdiBookOpenPageVariant} size={1} />
  }
];