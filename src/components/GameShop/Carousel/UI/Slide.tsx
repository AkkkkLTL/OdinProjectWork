import { SlideProps } from "./types";
import style from "./styles.module.css";

const Slide = ({
  children,
  width
}: SlideProps): JSX.Element => {
  return (
    <div 
      className={`${style.slide}`}
      style={{
        width: `${width}px`,
      }}
    >
      {children}
    </div>
  );
}

export default Slide;