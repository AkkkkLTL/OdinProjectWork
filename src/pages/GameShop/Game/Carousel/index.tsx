import { useTheme } from "styled-components";
import { ImageHolder, StyledSlide, Image } from "./styles";
import useCarousel from "./useCarousel";

const Carousel = () => {

  //const [screenShots, setScreenShots] = useState(SLIDES);
  const { screenshots } = useCarousel();
  const theme = useTheme();

  return (
    <StyledSlide
      loop
      slidesNumber={1}
      showDots={screenshots[1].id !== 0}
      dotColor={theme.colors.white[50]}
      activeDotColor={theme.colors.teal[100]}
      dotsAnimation="sliding"
    >
      {screenshots.map((screenshot) => (
        <ImageHolder key={screenshot.id}>
          <Image src={screenshot.image} />
        </ImageHolder>
      ))}
    </StyledSlide>
  );
}

export default Carousel;