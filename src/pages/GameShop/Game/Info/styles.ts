import styled, { css } from "styled-components";
import { TMoreButtonProps } from "./types";

export const StyledInfo = styled.div`
  grid-area: info;
`

export const Description = styled.div(
  ({theme}) => css`
    max-height: 300px;
    padding: 20px 20px 0px 20px;
    overflow: auto;
    // IE: hide scroll bar
    -ms-overflow-style: none;
    // FireFox: hide scroll bar
    scrollbar-width: none;
    color: ${theme.colors.white[150]};
    box-shadow: 0 0 20px rgb(10, 10, 10);

    // Browsers engined by webkit: hide scroll bar
    &::-webkit-scrollbar {
      display: none;
    }

    &::after {
      position: absolute;
      content: '';
      height: 45px;
      margin-top: -25px;
      display: block;
      position: sticky;
      bottom: -1px;
      background-image: linear-gradient(
        to bottom,
        transparent,
        rgb(15,15,15)        
      );
    }

    div {
      margin: 15px 0;
      color: white;
      font-size: ${theme.fontSizes.sm};
      font-weight: 600;
    }
  `
)

export const MoreInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: linear-gradient(
    90deg,
    rgba(38,38,38,0) 0%,
    rgba(38,38,38,1) 100%
  );
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`

export const Details = styled.ul(
  ({theme}) => css`
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin: 0;
    padding: 0;
    color: ${theme.colors.white[50]};
    list-style: none;
    overflow: auto;

    li {
      display: flex;
      gap: 7px;

      a {
        word-break: break-all;
        text-decoration: none;
        color: ${theme.colors.white[50]};
      }
    }
  `
)

export const MoreButton = styled.div<TMoreButtonProps>(
  ({$showMoreInfo, theme}) => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-top: ${$showMoreInfo ? '5px' : '0'};
    color: ${theme.colors.white[150]};
    cursor: pointer;


  `
)