import { Card, Flex, Layout } from "antd";
import Search from "antd/es/input/Search";
import { Content, Header } from "antd/es/layout/layout";
import styled from "styled-components";

export const BookMain = styled(Layout)`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  
`

export const BooksPageHeader = styled(Header)`

  display: flex;
  background-color: white;
  gap: 10px;
  align-items: center;
  justify-content: end;
`

export const CustomSearch = styled(Search)`
  max-width: 300px;
`
export const CustomContent = styled(Content)`
  padding: 20px;
  overflow-y: scroll;
`;

export const BookList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, ${prop=>`${prop.$cardwidth}px`});
  gap: 16px;
`

export const BookCard = styled(Card)`

  .ant-card-cover {
    aspect-ratio: 1 / 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    padding-top: 10px;

    img {
      border-radius: 5px;
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 100%;
    }
  }

  .ant-card-actions {
    position: absolute;
    top: 0px;
    right: 10px;
    background-color: transparent;
    & * {
      border-inline-end: none;
    }
  }

  .ant-card-meta-description {
    overflow: hidden;
    text-overflow: ellipsis;
    text-wrap: nowrap;
  }
`

export const EditBookMain = styled.div`
  position: fixed;
  z-index: 1;
  top: 50%;
  left: 50%;
  width: 300px;
  padding: var(--spacing-lg);
  border-radius: var(--border-radius);
  background-color: var(--grey);
  text-align: center;
  transform: translate(-50%, -50%) scale(1);
  transition: 0.2s ease-in-out;

  form {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`