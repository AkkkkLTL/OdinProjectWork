import { type IconProps as IconifyProps, Icon as IconifyIcon} from "@iconify/react";
import type { CSSProperties } from "react";

interface IProps extends IconifyProps {
  icon: string;
  size?: number | string;
  color?: string;
  className?: string;
  style?: CSSProperties;
}

export default function Icon({
  icon,
  size = "1em",
  color = "currentColor",
  className = "",
  style = {},
}:IProps) {
  if (icon.startsWith("url:")) {
    const url = icon.replace("url:", "");
    return (
      <img
        className={className}
        src={url}
        alt="icon"
        style={{
          width: size,
          height: size,
          color,
          ...style,
        }}
      />
    );
  }

  return (
    <IconifyIcon
      className={className}
      icon={icon}
      width={size}
      height={size}
      style={{
        color,
        height: size,
        width: size,
        ...style,
      }}
    />
  )
}