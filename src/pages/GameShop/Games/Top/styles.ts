import styled, { css } from "styled-components";

export const StyledTop = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 15px;
`

export const FilterName = styled.div(
  ({theme}) => css`
  font-size: ${theme.fontSizes["4x1"]};
  font-weight: 800;
`
)

export const OrderWrapper = styled.div`
  position: relative;
  cursor: pointer;

  svg {
    height: 20px;
    width: 20px;
  }
`

export const Order = styled.div(
  ({theme}) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 8px 15px;
    background-color: white;
    color: black;
    border-radius: 10px;
  `
)

export const OptionWrapper = styled.ul(
  ({theme}) => css`
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin: 0;
    padding: 10px;
    width: 100%;
    background-color: white;
    color: black;
    border-radius: 10px;

    li {
      padding: 3px 8px;
      border-radius: 7px;

      &:hover {
        background-color: ${theme.colors.white[250]};
      }
    }
  `
);

export const Option = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  svg {
    color: green;
  }
`