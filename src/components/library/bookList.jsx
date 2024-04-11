import styled from "styled-components";
import BookCard from "./bookCard";

const BookListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
  padding: 20px;
`

export default function BookList({books}) {
  return (
    <BookListStyle>
      {books.map((book) => (
        <BookCard
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          pages={book.pages}
          status={book.status}
        />
      ))}
    </BookListStyle>
  )
}