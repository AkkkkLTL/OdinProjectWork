import { SlidesContainerProps } from "./types";
import style from "./styles.module.css";
import { CSSProperties } from "react";

const SlidesContainer = ({
  children,
  width,
  positionX,
}: SlidesContainerProps) => {

  const inlineStyle = {
    '--width': width,
    '--positionX': positionX,
  } as CSSProperties;
  console.log(`the Slide Width is ${width} and the positionX is ${positionX}`);

  return (
    <div 
      className={`${style['slides-container']}`}
      style={inlineStyle}
    >
      {children}
    </div>
  );
}

export default SlidesContainer;