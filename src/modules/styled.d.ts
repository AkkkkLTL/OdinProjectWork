import 'styled-components';
import { BreakPoints, Colors, FontSizes } from '@assets/theme/GameShop';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: typeof BreakPoints,
    fontSizes: typeof FontSizes,
    colors: typeof Colors
  }
}

declare global {
  interface Result<T = any> {
    code:number;
    message: string;
    data?: T;
  }

  export interface Book {
    _id: string,
    title: string,
    author: IAuthor[],
    cover: string,
    isbn?: string,
    genre?: Genre,
  
    summary?: string,
    imprint?: string,
    status?:BookStatu,
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

  interface Genre {
    _id:string;
    name:string;
  }

  type BookStatu = "READING" | "UNREAD" | "READED";
}