import { ReactNode } from "react";

/** Carousel Component Params */
export interface CarouselProps {
  children: JSX.Element[],
  className?: string,
  loop?: boolean,
  nextButton?: ReactNode,
  prevButton?: ReactNode,
  slidesNumber?: number,
  spaceBetweenSlides?: number,
  onChange?: () => void,
}
