import { 
  ANDROID_ICON, 
  IOS_ICON, 
  NINTENDO_ICON, 
  PC_ICON, 
  PLAYSTATION_ICON, 
  XBOX_ICON 
} from "@assets/icons/GameShop";
import Icon from "@mdi/react";
import { ReactNode } from "react";

export const platformIcons: Record<string, ReactNode> = {
  pc: <Icon path={PC_ICON} size={1} />,
  android: <Icon path={ANDROID_ICON} size={1} />,
  ios: <Icon path={IOS_ICON} size={1} />,
  playstation: <Icon path={PLAYSTATION_ICON} size={1} />,
  xbox: <Icon path={XBOX_ICON} size={1} />,
  nintendo: <Icon path={NINTENDO_ICON} size={1} />,
}