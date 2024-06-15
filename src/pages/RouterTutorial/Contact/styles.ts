import styled from "styled-components";

export const ContactMain = styled.div`
  display: flex;
  max-width: 40rem;

  & h1 + p {
    margin: 0;
  }

  & h1 + p + p {
    white-space: break-spaces;
  }

  & a[href*="twitter"] {
    display: flex;
    font-size: 1.5rem;
    color: #3992ff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  & h1 ~ div {
    display: flex;
    gap: 0.5rem;
    margin: 1rem 0;
  }

  & img {
    width: 12rem;
    height: 12rem;
    background: #c8c8c8;
    margin-right: 2rem;
    border-radius: 1.5rem;
    object-fit: cover;
  }
`

export const Title = styled.h1`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  line-height: 1.2;

  & form {
    display: flex;
    align-items: center;
    margin-top: 0.25rem;

    & button {
      box-shadow: none;
      font-size: 1.5rem;
      font-weight: 400;
      padding: 0;
    }

    & button[value="true"] {
      color: #a4a4a4;
    }

    & button[value="true"]:hover,
    & button[value="false"] {
      color: #eeb004;
    }
  }

  & form[action$="destroy"] button {
    color: #f44250;
  }

  &:focus {
    outline: none;
    color: hsl(224, 98%, 58%);
  }
`