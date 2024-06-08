import styled, { css } from "styled-components";

export const StyledAddGame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`

export const Header = styled.h1(
  ({theme}) => css`
    font-size: ${theme.fontSizes["3x1"]};
    text-align: center;
  `
);
