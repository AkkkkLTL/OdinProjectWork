import styled from "styled-components";
import { StyledNavigationProps } from "./types";

export const StyledNavigation = styled.div<StyledNavigationProps>`
  display: flex;
  gap: 10px;
  align-items: center;
  
  > * {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${prop => prop.theme.colors.black[100]};
    height: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 5px;
    cursor: pointer;
  }

  svg {
    color: ${prop => prop.theme.colors.purple[50]};
  }
`

export const CartWrapper = styled.div<StyledNavigationProps>`


`