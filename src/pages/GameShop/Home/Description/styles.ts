import styled, { css } from "styled-components";
import Carousel from "@components/GameShop/Carousel";

export const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  z-index: 1;
  width: 50%;
  position: absolute;
  color: white;
`

export const Header = styled.div`
  margin: 0;
  text-align: center;

  h1 {
    margin: 2px;
  }
  h2 {
    margin: 0;
  }
  p {
    margin: 2px;
  }
`

export const SlidesContainer = styled(Carousel)`
  width: 80vw;
  height: 40vh;

  [class*="_slide_"] {
    width: 80vw;
  }

`

export const Image = styled.img`
  width: inherit;
  height: inherit;
`

export const EnjoyBlock = styled.div(
  ({theme}) => css`
    display: flex;
    gap: 5px;

    .enjoy {
      font-size: ${theme.fontSizes.sm};
    }
  `
)

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;
  border-radius: 15px;

  svg {
    height: 22px;
    width: 22px;
  }
`

export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  background-color: white;
  color: black;
  text-decoration: none;
  border-radius: 12px;
  transition: 0.3s;

  &:hover {
    background-color: ${prop => prop.theme.colors.teal[50]};
    transform: scale(1.05);
  }

&:active {
  transform: scale(1);
}
`