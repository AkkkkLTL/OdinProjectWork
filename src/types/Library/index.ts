export interface IBook {
  _id: string,
  title: string,
  author: IAuthor[],
  cover: string,
  isbn?: string,
  genre?: Object,

  summary?: string,
  imprint?: string,
  status?:"READING" | "UNREAD" | "READED",
  pages?: number,
  currentPages?: number,
}

export interface IAuthor {
  _id: string,
  full_name: string,
  date_of_birth?: Date,
  date_of_death?: Date,

  url?: string,
}