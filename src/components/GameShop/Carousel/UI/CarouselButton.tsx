import { CarouselButtonProps } from "./types";
import style from "./styles.module.css";

const CarouselButton = ({
  children,
  onClick,
  className,
  disable
}: CarouselButtonProps) => (
  <button
    disabled={disable}
    className={`${style['carousel-button']} ${className}`}
    onClick={onClick}
    type="button"
  >
    {children}
  </button>
);
export default CarouselButton;