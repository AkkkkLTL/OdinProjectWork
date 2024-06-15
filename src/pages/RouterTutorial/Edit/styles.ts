import { Form } from "react-router-dom";
import styled from "styled-components";

export const EditForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 40rem;

  & > p:first-child {
    margin: 0;
    padding: 0;

    > :nth-child(2) {
      margin-right: 1rem;
    }
  }

  & > p:first-child,
  & label {
    display: flex;
  }

  & p:first-child span,
  & label span {
    width: 8rem;
  }

  & p:first-child input,
  & label input,
  & label textarea {
    flex-grow: 2;
  }

  & p:last-child {
    display: flex;
    gap: 0.5rem;
    margin: 0 0 0 8rem;
  }

  & p:last-child button[type="button"] {
    color: inherit;
  }
`