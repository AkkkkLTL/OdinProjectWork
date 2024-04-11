import uniqid from "uniqid";

class Book {
  constructor(
    title = '',
    author = '',
    pages = '0',
    status = 'Not read',
    cover = ''
  ) {
    this.id = uniqid();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.cover = cover;
  }

  get getBook(){
    return this;
  }
}

export default Book;