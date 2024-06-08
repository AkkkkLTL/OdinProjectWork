import { SlidesWrapperProps } from "./types";
import style from "./styles.module.css";

const SlidesWrapper = ({
  children,
  slidesWrapperRef,
}: SlidesWrapperProps): JSX.Element => {
  return (
    <div
      className={`${style['slides-wrapper']}`}
      ref={slidesWrapperRef}
    >
      {children}
    </div>
  );
}

export default SlidesWrapper;