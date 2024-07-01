import type { Author, Book, Response, SummaryData } from "@router/Library/loaders/types";
import axios from "axios";
axios.defaults.baseURL = import.meta.env.VITE_CGAME_API_URL;


export const getSummary = async ():Promise<Response<SummaryData> | undefined> => {
  try {
    const res = await axios.get<Response<SummaryData>>('/books/summary');
    console.log("getSummary Response data: ", res.data);
    return res.data;
  } catch(error) {
    console.error("getSummary Error: ", error);
  }
}

export const getBooks = async (params?:any):Promise<Response<Book[]> | undefined>=> {
  try {
    const res = await axios.get<Response<Book[]>>('/books', {
      params: params,
    });
    console.log('getBookList Response data: ', res.data);
    return res.data;
  } catch(error) {
    console.error('getBookList Error: ', error);
  }
}

export const getBookById = async (id:string):Promise<Response<Book> | undefined> => {
  try {
    const res = await axios.get<Response<Book>>(`/books/${id}`);
    console.log('getBookById Response data: ', res.data);
    return res.data;
  } catch(error) {
    console.error("getBookById Error: ", error);
  }
}

export const getAuthors = async ():Promise<Response<Author[]> | undefined> => {
  try {
    const res = await axios.get<Response<Author[]>>('/authors');
    console.log('getAuthors Response data: ', res.data);
    return res.data;
  } catch(error) {
    console.error('getAuthors Error: ', error);
  }
}

export const createAuthor = async (data:string):Promise<Response<Author> | undefined> => {
  try {
    const res = await axios.post<Response<Author>>('/authors', {"full_name": data});
    console.log('createAuthor Response data: ', res.data);
    return res.data;
  } catch(error) {
    console.error('createAuthor Error: ', error);
  }
}

export const createBook = async (data:Book):Promise<Response<Book> | undefined> => {
  try {
    const res = await axios.post<Response<Book>>('/books/create', data);
    console.log("createBook Response data: ", res.data);
    return res.data;
  } catch(error) {
    console.error("createBook Error: ", error);
  }
}

export const updateBook = async (id:string,data:Book):Promise<Response<Book> | undefined> => {
  try {
    const res = await axios.put(`/books/${id}`, data);
    console.log("updateBook Response data: ", res.data);
    return res.data;
  } catch(error) {
    console.error("updateBook Error: ", error);
  }
}

export const deleteBook = async (id:string) => {
  try {
    const res = await axios.delete(`/books/${id}`);
    console.log("deleteBook Response data: ", res.data);
    return res.data;
  } catch(error) {
    console.error("deleteBook Error: ", error);
  }
}