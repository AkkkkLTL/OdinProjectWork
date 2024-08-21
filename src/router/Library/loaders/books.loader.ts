import { getAuthors, getBooks } from "@/api/Library"

export const booksLoader = async ({request}:any) => {
  const url = new URL(request.url);
  const status = url.searchParams.get("status");
  const books = (await getBooks({status:status}))?.data;
  const authors = (await getAuthors())?.data;
  return { books, authors }
}