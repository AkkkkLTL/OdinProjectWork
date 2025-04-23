import apiClient from "../apiClient";

interface BooksReq {
  status:string | undefined | null;
}

interface BooksRes {
  booklist: Book[],
  total: number
}

enum BookApi {
  Books = "/books",
}

const getBooks = (params?:BooksReq) => apiClient.get<BooksRes>({
  url: BookApi.Books,
  params
});

const getBookById = (id:string) => apiClient.get({
  url: `${BookApi.Books}/${id}`,
});

const createBook = (data:Book) => apiClient.post({
  url: `${BookApi.Books}/create`,
  data
});

const updateBook = (id:string, data:Book) => apiClient.put({
  url: `${BookApi.Books}/${id}`,
  data
});

const deleteBook = (id:string) => apiClient.delete({
  url: `${BookApi.Books}/${id}`,
});

export {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook
}