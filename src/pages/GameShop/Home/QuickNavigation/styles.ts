import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  border-radius: 20px;

  svg {
    height: 40px;
    width: 40px;
  }

`

export const Header = styled.h3`
  margin: 0;
  color: white;
`

export const Links = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 14px;
  margin: 0;
  padding: 0;
  width: inherit;

  li {
    list-style: none;
    aspect-ratio: 1 / 1;
  }

`

export const LinkWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: 10px 10px;

  color: black;
  border-radius: 12px;
  text-decoration: none;
  width: 100%;
  height: 100%;

  &:hover {
    background-color: ${prop => prop.theme.colors.teal[50]};
  }
`