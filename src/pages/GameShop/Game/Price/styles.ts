import styled, { css } from "styled-components";

export const StyledPrice = styled.div(
  ({theme}) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 22px;
    background: linear-gradient(
      90deg,
      rgba(26,26,26,0) 0%,
      rgba(26,26,26,1) 100%
    );
    color: white;
    border-radius: 10px;
    grid-area: price;

    & > span:first-child {
      font-size: ${theme.fontSizes.xs};
      font-weight: 500;
    }
  `
)

export const Status = styled.span(
  ({theme}) => css`
  display: flex;
  font-size: ${theme.fontSizes.sm};
  font-weight: 600;

  
`
)