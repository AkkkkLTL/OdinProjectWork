import { useEffect, useRef, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom"
import { BookListLoader, FieldType, IBooksRes } from "./types";
import { Form, FormProps } from "antd";
import { Book } from "@/router/Library/loaders/types";
import { createBook, deleteBook } from "@/api/Library";
import { IBook } from "@/types/Library";
import axios from "axios";

const useBookList = () => {
  const { authors } = useLoaderData() as BookListLoader;
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const authorRef = useRef(null);

  // Setting Books Page State
  const [books, setBooks] = useState<IBook[]>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    // Get Books
    axios.get<IBooksRes>("http://192.168.20.149:3000/books", {
      headers: {
        "Content-Type": "application/json"
      },
      params: {
        page: currentPage,
        pageSize: 16
      },
      timeout: 5000
    }).then(response => {
      setBooks(response.data.data);
    }).catch(ex => {
      const error = ex.code === "ECONNABORTED" 
      ? "A timeout has occurred" : ex.response.status === 404
      ? "Resource not found" : "An unexpected error has occurred";
      setError(error);
    })
  }, []);

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