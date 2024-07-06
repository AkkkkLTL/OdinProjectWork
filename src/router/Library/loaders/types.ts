export interface SummaryData {
  _id: string,
  number: number,
}

export interface Book {
  _id: string,
  title: string,
  author: Author[],
  cover: string,
  isbn?: string,
  genre?: Object,

  summary?: string,
  imprint?: string,
  status?:string,
  pages?: number,
  currentPages?: number,
}

export interface Author {
  _id: string,
  full_name: string,
  date_of_birth?: Date,
  date_of_death?: Date,

  url?: string,
}

export type Response<T> = {
  data: T,
  message: string,
}