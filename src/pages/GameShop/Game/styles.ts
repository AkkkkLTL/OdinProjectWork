import styled, { css } from "styled-components";

export const StyledGame = styled.main(
  ({theme}) => css`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 5px;
    height: 100%;
    padding: 0 40px 30px 40px;
    background-color: black;
    
  `
);

export const Main = styled.div(
  ({theme}) => css`
    flex: 1;
    display: grid;
    grid-template: 1fr min-content / auto max(26vw, 300px);
    grid-template-areas: 
      'images info'
      'images price';
    gap: 30px;
  `
);
