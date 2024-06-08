import styled, { css } from "styled-components";
import { TButton } from "./types";

export const Button = styled.button<TButton>`
  padding: 12px 60px;
  background-color: ${prop => prop.$color};
  color: white;
  border-radius: 10px;
`