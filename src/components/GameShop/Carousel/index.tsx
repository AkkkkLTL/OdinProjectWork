import { Children } from "react"
import { CarouselProps } from "./types"
import CarouselWrapper from "./UI/CarouselWrapper"
import CarouselButton from "./UI/CarouselButton"
import SlidesContainer from "./UI/SlidesContainer"
import Slide from "./UI/Slide"
import SlidesWrapper from "./UI/SlidesWrapper"
import { useCarousel } from "./useCarousel"

const Carousel = ({
  children = [],
  className,
  nextButton='>',
  prevButton='<',
}: CarouselProps) => {
  const { slidesWrapperRef, slideWidth, slideIndex, nextImg } = useCarousel();

  return (
    <CarouselWrapper className={className}>
      <CarouselButton className="left-button">
        {prevButton}
      </CarouselButton>
      <SlidesWrapper
        slidesWrapperRef={slidesWrapperRef}
      >
        <SlidesContainer
          width={slideWidth}
          positionX={slideIndex * slideWidth}
        >
          {Children.map(children, (child) => 
            <Slide 
              key={child.key}
              width={slideWidth ? slideWidth : 0}
            >
              {child}
            </Slide>
          )}
        </SlidesContainer>
      </SlidesWrapper>
      <CarouselButton 
        className="right-button"
        onClick={nextImg}
      >
        {nextButton}
      </CarouselButton>
    </CarouselWrapper>
  );
}
export default Carousel;