import { Author, Book } from "@/router/Library/loaders/types";
import Mock, { Random } from "mockjs";

const authorData:Author[] = Mock.mock({
  "data|16": [
    {
      "_id": '@id',
      "full_name": '@cname',
    }
  ]
}).data;

// Generate mock book data
let bookData:Book[] = Mock.mock({
  "data|12": [
    {
      "_id": '@id',
      "title":'@ctitle(5,10)',
      "cover":Random.image('182x182','#7987f2','@ctitle(3)'),
      "author": function() {
        const num = Random.integer(1, 2);
        const authors = [];
        for (let i = 1; i <= num; ++i) {
          authors.push(authorData[Random.integer(0, 15)]._id);
        }
        return authors;
      },
    }
  ]
}).data;

const genreData = Mock.mock({
  "data|3": [
    {
      "_id": '@id',
      "genre": '@ctitle(2)',
    }
  ]
}).data;


Mock.mock(RegExp("/books/create"), 'post', (options) => {
  console.log("Mock post /books/createBook", options);
  const createData = JSON.parse(options.body);
  bookData.unshift(
    Mock.mock({
      "_id": '@id',
      ...createData,
    })
  );
  return {
    code: 200,
    message: "书籍添加成功",
  }
});

Mock.mock(RegExp("/books/summary"), 'get', (options) => {
  console.log("Mock get /books/summary", options);
  return {
    code: 200,
    message: "请求成功",
    data: {
      sumBook: bookData.length,
      sumAuthor: authorData.length,
      sumGenre: genreData.length,
    }
  }
})


Mock.mock(RegExp("/books/(?:\\?([^#]*))?"), 'get', (options) => {
  const regex = /\/books\/(?:\\?([^#]*))?/g;
  const bookId = regex.exec(options.url)?.[0].replace('/books/', '');
  
  let book = {}, author = [];
  Object.assign(book, bookData.find((element) => element._id == bookId));
  ((book as Book).author as Author[] | Array<string>).forEach((item) => {
    author.push(authorData.find((role) => role._id == item));
  });
  (book as Book).author = author;
  console.log("Mock get /books/:id", options, bookId);

  return {
    code: 200,
    message: "请求成功",
    data: book,
  }
});

// Get Book List
Mock.mock(RegExp("/books"), 'get', (options) => {
  let bookList:Book[] = [];
  
  bookData.forEach((item) => {
    let book:Book = {} as any, author:Author[] = [] as any;
    Object.assign(book, item);
    (book.author).forEach((authorItem) => {
      author.push(authorData.find((role) => role._id == authorItem));
    });
    book.author = author;
    bookList.push(book);
  })
  console.log("Mock get /books", options);
  return {
    code: 200,
    message: "请求成功",
    data: bookList,
  }
});



Mock.mock(RegExp("/books/(?:\\?([^#]*))?"), 'put', (options) => {
  console.log("Mock put /books/:id", options);
  const regex = /\/books\/(?:\\?([^#]*))?/g;
  const bookId = regex.exec(options.url)?.[0].replace('/books/', '');
  const data = JSON.parse(options.body) as Book;
  bookData.map((book) => {
    if (book._id == bookId) {
      Object.assign(book, data);
    }
  });
  return {
    code: 200,
    message: "更新成功",
  }
});

Mock.mock(RegExp("/books/(?:\\?([^#]*))?"), 'delete', (options) => {
  console.log("Mock delete /books/:id", options);
  const regex = /\/books\/(?:\\?([^#]*))?/g;
  const bookId = regex.exec(options.url)?.[0].replace('/books/', '');
  bookData = bookData.filter((book) => book._id != bookId);
  return {
    code: 200,
    message: "delete success"
  }
})

// Get Author List
Mock.mock(RegExp("/authors"), 'get', (options) => {
  console.log(options);
  return {
    code: 200,
    message: "请求成功",
    data: authorData,
    totalPage: authorData.length,
  }
});



