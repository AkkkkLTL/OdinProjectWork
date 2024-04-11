import { Fragment, useState } from "react";
import styled from "styled-components";

import Header from "../Header";
import EditBook from "../edit";
import ButtonAdd from "../btnAdd";
import { library } from "../../../data/Library";
import { redirect, useLoaderData } from "react-router-dom";
import BookList from "../bookList";

const RootStyle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  };
`

export default function Root() {
  const [showEdit, setShowEdit] = useState(false);
  const books = useLoaderData();

  function handleClick() {
    setShowEdit(true);
  }

  function closeAddBookModal() {
    setShowEdit(false);
  }

  return (
    <RootStyle>
      <Header />
      <div>
        <ButtonAdd
          onClick={handleClick}
        />
      </div>
      <BookList books={books} />
      {showEdit && 
        <EditBook
          closeEvent={closeAddBookModal}/>}
      {showEdit && (
        <div 
          className="overlay"
          onClick={closeAddBookModal}
        >
        </div>
      )}
    </RootStyle>
  )
}

export async function loader() {
  const books = await library.getBooks();
  return books;
}

export async function action({request}) {
  const formData = await request.formData();
  console.log()
  const actionType = formData.get("editType").split(" ")[0];
  const bookId = formData.get("editType").split(" ")[1];
  const updates = Object.fromEntries(formData);
  switch(actionType) {
    case "add":
      if (updates.isRead) updates.status = 'Reading';
      else updates.status = 'Not Read';
      library.createBook(updates);
      return redirect("/");
    case "delete":
      await library.deleteBook(bookId);
      return redirect("/");
    case "changeStatus":
      return library.updateBook(bookId, {
        status: formData.get("editType").split(" ")[2] === "Reading" ? "Not Read" : "Reading"
      });
  }

  return null;
}