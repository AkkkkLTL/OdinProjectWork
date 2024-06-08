import { useMemo, useState } from "react";
import { Slides } from "./types";

export const useSlides = ({
  currentRef,
}: Slides) => {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  const slideWidth = currentRef?.clientWidth || 0;

  return {
    slideWidth,
    slideIndex,
    setSlideIndex,
  }
}