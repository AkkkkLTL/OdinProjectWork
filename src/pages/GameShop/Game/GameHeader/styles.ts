import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Header = styled.div(
  ({theme}) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    color: white;
  `
);

export const BackButton = styled(Link)(
  ({theme}) => css`
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${theme.colors.white[150]};
    font-size: ${theme.fontSizes.sm};
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;

    svg {
      height: 25px;
      width: 25px;
    }

    &:hover {
      color: ${theme.colors.teal[100]};
    }
  `
);

export const GameName = styled.span(
  ({theme}) => css`
    font-size: ${theme.fontSizes["2x1"]};
    font-weight: 800;
    text-align: end;
  `
);