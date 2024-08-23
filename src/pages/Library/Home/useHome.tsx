import { Form, FormProps, Modal } from "antd";
import { useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FileType, homeLoader } from "./types";
import { updateBook } from "@/api/Library";

const useHome = () => {
  const echartRef = useRef(null);
  const [form] = Form.useForm();
  const { summaryData, readingBooks} = useLoaderData() as homeLoader;
  const [openModal, setOpenModal] = useState(false);
  const [readingBook, setReadingBook] = useState(readingBooks);
  const [editBookId, setEditBookId] = useState('');
  
  const clickProcess = (bookId:string) => {
    // open book process edit modal
    setOpenModal(true);
    // record edit book's id
    setEditBookId(bookId);
  }

  const handleOk = () => {
    // submit form
    form.submit();
    // close modal
    setOpenModal(false);
  }

  const handleCancel = () => {
    // close modal
    setOpenModal(false);
  }

  const onFinish: FormProps<FileType>['onFinish'] = async (values) => {
    // update book process
    await updateBook(editBookId, values);
    // update readingBook's process
    setReadingBook(readingBook.map(book => book._id == editBookId ? {
      ...book,
      "pages": values.pages,
      "currentPages": values.currentPages
    } : book))
  }

  return {
    echartRef,
    clickProcess,
    openModal,
    handleOk,
    handleCancel,
    summaryData,
    readingBook,
    editBookId,
    form,
    onFinish
  }
}

export default useHome;