import { LibraryApp } from "@/pages/Library";
import { RouteObject } from "react-router-dom";
import { summaryLoader } from "./loaders/gallery.loader";
import { HomePage } from "@/pages/Library/Home";
import { booksLoader } from "./loaders/books.loader";
import { BookPage } from "@/pages/Library/BookList";
import { createAction } from "./actions/create.action";
import { Edit } from "@/pages/Library/Edit";
import { bookLoader } from "./loaders/book.loader";

export const libraryRouter:RouteObject[] = [
  {
    path: "/library",
    element: <LibraryApp />,
    children: [
      {
        index: true, 
        element: <HomePage />,
        loader: summaryLoader,
      },
      {
        path: "books",
        element: <BookPage />,
        loader: booksLoader,
        action: createAction,
        children: [
          {
            path: ":bookId/edit",
            element: <Edit />,
            loader: bookLoader,
          }
        ]
      }
    ]
  }
]