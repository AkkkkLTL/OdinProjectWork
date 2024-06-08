import styled from "styled-components";

import Carousel from "@components/GameShop/Carousel";

export const Main = styled.main`

  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 50px;

  background-color: ${prop => prop.theme.colors.black[150]};

  padding: 0 10%;
`

export const SlidesContainer = styled(Carousel)`
  width: calc(100% + 60px);
  height: inherit;

  [class*="_slide_"] {
    width: inherit;
  }

  [class*="_slides-wrapper_"] {
    border-radius: 12px;
  }

  [class*="right-button"] {
    transform: translateX(-15px);

  }

  [class*="left-button"] {
    transform: translateX(15px);
  }

`

export const Image = styled.img`
  width: inherit;
  height: inherit;
`

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  height: 40vh;
  width: 100%;
`

export const ArrowButton = styled.div`
  background-color: ${prop => prop.theme.colors.black[100]};
  color: ${prop => prop.theme.colors.purple[50]};
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-color: black;
`