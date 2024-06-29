import { getBookById } from "@api/Library"

export const bookLoader = async ({params}:any) => {
  const book = (await getBookById(params.bookId))?.data;
  return { book }
}