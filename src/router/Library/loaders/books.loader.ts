import { getAuthors, getBooks } from "@api/Library"

export const booksLoader = async () => {
  const books = (await getBooks())?.data;
  const authors = (await getAuthors())?.data;
  return { books, authors }
}