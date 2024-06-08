import styled, { CSSObject, css } from "styled-components";
import { IconHolderProps, StyledSidebarProps } from "./types";

const aside = {
  position: 'sticky',
  top: '0px',
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  gap: '30px',
  padding: '30px 0 20px 0',
  overflow: 'auto',
}

const fullScreen = {
  position: 'fixed',
  zIndex: '5',
  top: '0',
  left: '0',
  display: 'grid',
  gridTemplatedColumns: 'repeat(auto-fit, minmax(190px, auto))',
  gap: '40px',
  height: '100%',
  width: '100%',
  padding: '30px',
  color: 'black',
  overflow: 'auto',
}

export const StyledSidebar = styled.div<StyledSidebarProps>(
  ({$isChangeSidebar}) => css`
    ${$isChangeSidebar ? (fullScreen as CSSObject) : (aside as CSSObject)}
  `
);

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const Header = styled.h3(
  ({theme}) => css`
    font-size: ${theme.fontSizes.lg};
    font-weight: 600;
    margin: 0;
  `
)

export const Filter = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;
`

export const IconWrapper = styled.div<IconHolderProps>(
  ({$isHighlight, theme}) => css`
    display: flex;
    height: 38px;
    width: 38px;
    align-items: center;
    justify-content: center;
    background-color: ${$isHighlight ? 'white' : theme.colors.black[200]};
    border-radius: 8px;
    
    svg {
      color: ${$isHighlight ? 'black' : 'white'};
    }
  `
)