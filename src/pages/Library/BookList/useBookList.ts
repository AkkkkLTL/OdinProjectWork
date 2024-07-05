import { useRef, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom"
import { BookListLoader, FieldType } from "./types";
import { Form, FormProps } from "antd";
import { Book } from "@router/Library/loaders/types";
import { createBook, deleteBook } from "@api/Library";

const useBookList = () => {
  const { books, authors } = useLoaderData() as BookListLoader;
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const authorRef = useRef(null);

  const showModal = () => {
    setIsModalOpen(true);
  }

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
      })
      .catch((errorInfo) => {
        console.log("Failed:", errorInfo);
      })
  }

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  }

  const handleDeleteClick = async (bookId:string) => {
    await deleteBook(bookId);
    navigate('');
  }

  const onFinish:FormProps<FieldType>['onFinish'] = async (values) => {
    console.log("Success:", values);
    await createBook(values);
    setIsModalOpen(false);
    form.resetFields();
    navigate('');
  }

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log("Failed:", errorInfo);
  }

  return {
    books,
    authors,
    form,
    authorRef,
    isModalOpen,
    showModal,
    handleOk,
    handleCancel,
    onFinish,
    onFinishFailed,
    handleDeleteClick
  }
}
export default useBookList;