import styled, { css } from "styled-components";
import { StyledHeaderProps } from "./types";
import MagnifyingGlass from "@assets/icons/magnify.svg?react";

export const StyledHeader = styled.header<StyledHeaderProps>`
    position: ${prop => prop.$isModifyHeader ? 'sticky' : 'block'};
    top: ${prop => prop.$scrollDirection === 'down' && prop.$isModifyHeader ? '-90px' : '0'};

    // layout
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 10px 10%;
    background-color: ${prop => prop.$isModifyHeader
      ? prop => prop.theme.colors.black[250]
      : 'transparent'
    };
    color: white;


    @media (max-width: ${prop => prop.theme.breakpoints.md}) {
      gap: 16px;
    }
`

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  background-color: ${prop => prop.theme.colors.black[100]};
  border-radius: 10px;
  max-width: 300px;
`

export const NavigationWrapper = styled.div`
  display: flex;
  gap: 10px;
`

export const LogoWrapper = styled(InputWrapper)`

  // text style
  flex-shrink: 0;
  width: fit-content;
  font-size: ${prop => prop.theme.fontSizes.sm};
  font-weight: 500;
  color: white;
  background-color: transparent;

  &:hover {
    transform: scale(1.05);
  }
`

export const Logo = styled.img`
  height: 50px;
`

export const Input = styled.input.attrs(() => ({
  placeholder: 'Search games...',
}))`
  width: 100%;
  padding: 8px 0px 8px 16px;
  outline: none;
  border: none;
  border-radius: 10px;
  background-color: ${prop => prop.theme.colors.black[100]};
`

export const MagnifyGlass = styled(MagnifyingGlass)(
  ({theme}) => css`
    height: 25px;
    width: 25px;
    margin-left: 10px;
    fill: ${prop => prop.theme.colors.purple[50]};
    cursor: pointer;
  `
)