import localforage, { setDriver } from "localforage";
import Book from "./Book";

localforage.config({
  name: 'Library App',
  driver: localforage.LOCALSTORAGE,
});

class Library {
  static #fakeCache = {};
  #books;

  constructor() {
    this.#books = null;
  }

  addBook(newBook) {
    if (!this.isInLibrary(newBook)) {
      this.books.push(newBook);
    }
  }

  removeBook(title) {
    this.books = this.books.filter((book) => book.title !== title)
  }

  getBook(title) {
    return this.books.find((book) => book.title === title);
  }

  isInLibrary(newBook) {
    return this.books.some((book) => book.title === newBook.title);
  }

  async getBooks() {
    await Library.#fakeNetwork(`getBooks`);
    if (!this.#books) {
      this.#books = await localforage.getItem("books");
      this.#books ?? [];
    }
    if (!this.#books) this.#books = [];
    return this.#books;
  }

  async createBook(pramBook) {
    await Library.#fakeNetwork();
    let book = new Book(
      pramBook.title,
      pramBook.author,
      pramBook.pages,
      pramBook.status,
      pramBook.cover
    );
    if (!this.#books) this.#books = await this.getBooks();
    this.#books.unshift(book);
    await this.#set(this.#books);
    return book.getBook;
  }

  async updateBook(id, updates) {
    await Library.#fakeNetwork();
    if (!this.#books) this.#books = await this.getBooks();
    let book = this.#books.find(book => book.id == id);
    if (!book) throw new Error("Not book found for", id);
    Object.assign(book, updates);
    await this.#set(this.#books);
    return book;
  }

  async deleteBook(id) {
    let index = this.#books.findIndex(book => book.id === id);
    if (index > -1) {
      this.#books.splice(index, 1);
      await this.#set(this.#books);
      return true;
    }
    return false;
  }

  #set(books) {
    return localforage.setItem("books", books);
  }

  static async #fakeNetwork(key) {
    if (!key) {
      Library.#fakeCache = {};
    }

    if (Library.#fakeCache[key]) {
      return;
    }

    Library.#fakeCache[key] = true;
    return new Promise(res => {
      setTimeout(res, Math.random() * 800);
    });
  }
}

export const library = new Library();