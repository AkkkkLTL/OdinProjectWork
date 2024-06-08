import { ComponentBasicProps } from "./types";
import style from "./styles.module.css";

const CarouselWrapper = ({
  children,
  className='',
  ...props
}:ComponentBasicProps): JSX.Element => (
  <div 
    className={`${style['carousel-wrapper']} ${className}`}
    {...props}
  >
    {children}
  </div>
);

export default CarouselWrapper;