import styled, { css } from "styled-components";
import Swipi from "swipi";

export const StyledSlide = styled(Swipi)(
  ({theme}) => css`
    min-height: 445px;
    background-color: ${theme.colors.black[200]};
    border-radius: 30px;
    background-size: 70% 100%;
    background-repeat: no-repeat;
    overflow: hidden;
    grid-area: images;

    .swipi-container {
      display: flex;
      position: absolute;
      height: 100%;
      width: 100%;
    }

    button {
      z-index: 1;
      position: absolute;
      height: 100%;
    }

    .dots-wrapper {
      position: absolute;
      bottom: 20px;
      padding: 14px 18px;
      background-color: ${theme.colors.black[250]};
      border-radius: 10px;
    }
  `
)

export const ImageHolder = styled.div`
  display: flex;
  height: 100%;
`

export const Image = styled.img`
  height: 100%;
  min-width: 100%;
  object-fit: cover;
`