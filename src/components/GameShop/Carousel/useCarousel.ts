import { useEffect, useRef, useState } from "react"
import { useSlides } from "./hooks/useSlides";

export const useCarousel = () => {
  const slidesWrapperRef = useRef<HTMLDivElement>(null);
  const [currentRef, setCurrentRef] = useState(slidesWrapperRef.current)
  const { slideWidth, slideIndex, setSlideIndex } = useSlides({
    currentRef:currentRef
  });

  const nextImg = () => {
    console.log(`switch from ${slideIndex}`);
    setSlideIndex((slideIndex + 1) % 3);
  }

  useEffect(() => {
    setCurrentRef(slidesWrapperRef.current);
  }, [slidesWrapperRef]);

  return {
    slidesWrapperRef,
    slideWidth,
    slideIndex,
    nextImg,
  }
}