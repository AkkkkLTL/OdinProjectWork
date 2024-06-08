import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const StyledGameList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  justify-content: center;
  gap: 30px;
  margin-top: 30px;
`

export const GameWrapper = styled.div(
  ({theme}) => css`
    max-width: 700px;
    background-color: ${theme.colors.black[200]};
    color: white;
    border-radius: 18px;
    
    &:hover {
      transform: scale(1.05);
    }
  `
);

export const Image = styled.img`
  aspect-ratio: 1.7 / 1;
  object-fit: cover;
  width: 100%;
  background-position: center;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 15px 20px;
`
export const AddToCart = styled.button(
  ({theme}) => css`
    display: flex;
    align-items: center;
    gap: 3px;
    padding: 0;
    background-color: transparent;
    color: ${theme.colors.teal[100]};
    border: none;
  `
)

export const PlayformIcons = styled.div`
  display: flex;
  gap: 7px;

  svg {
    height: 13px;
    fill: white;
  }
`

export const GameName = styled(Link)(
  ({theme}) => css`
    font-size: ${theme.fontSizes.sm};
    font-weight: 600;
    text-decoration: none;
    color: white;
  `
)