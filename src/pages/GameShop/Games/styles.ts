import styled, { css } from "styled-components";
import { MainProps } from "./types";

export const Main = styled.main<MainProps>(
  ({$isList, theme}) => css`
    ${!$isList && {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    display: flex;
    gap: 45px;
    padding: 0px 30px;
    background-color: ${theme.colors.black[50]};
    color: white;
  `
)

export const Content = styled.div(
  ({theme}) => css`
    flex: 1;
    padding: 0 15px 10px 15px;
    padding-bottom: 30px;
    overflow: auto;
  `
)