import { ComponentBasicProps } from "./types";

const CarouselContainer = ({
  children,
  className='',
  ...props
}: ComponentBasicProps): JSX.Element => (
  <div 
    className={`carousel-container ${className}`}
    style={{
      display: 'flex',
      alignItems: 'center',
      width: '100%'
    }}
    {...props}
  >
    {children}
  </div>
);
export default CarouselContainer;