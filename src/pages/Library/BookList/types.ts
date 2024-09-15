import { Author, Book } from "@/router/Library/loaders/types"
import { IBook } from "@/types/Library";

export type BookListLoader = {
  books: Book[],
  authors: Author[],
}

export type FieldType = {
  title:string,
  isbn:string,
  author:string,
  pages?:number,
  currentPages?:number,
  cover:string,
  status?:string,
} & Book;

export interface IBooksRes {
  data: {
    booklist: IBook[],
    total: number
  };
  message:string;
}

export type BookStatu = "READING" | "UNREAD" | "READED";