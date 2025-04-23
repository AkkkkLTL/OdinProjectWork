import { useEffect, useRef, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom"
import { BookListLoader, BookStatu, FieldType, IBooksRes } from "./types";
import { Form, FormProps, PaginationProps } from "antd";
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
  const [total, setTotal] = useState<number>(0);
  const [error, setError] = useState<string>("");
  const [statu, setStatu] = useState<BookStatu>("READING");

  useEffect(() => {
    // Get Books
    axios.get<IBooksRes>(`${import.meta.env.VITE_CGAME_API_URL}/books`, {
      headers: {
        "Content-Type": "application/json"
      },
      params: {
        page: currentPage,
        pageSize: 16,
        status: statu
      },
      timeout: 5000
    }).then(response => {
      setBooks(response.data.data.booklist);
      setTotal(response.data.data.total);
    }).catch(ex => {
      const error = ex.code === "ECONNABORTED" 
      ? "A timeout has occurred" : ex.response.status === 404
      ? "Resource not found" : "An unexpected error has occurred";
      setError(error);
    })
  }, [currentPage, statu]);

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

  const handleStatusChange = (value:BookStatu) => {
    setStatu(value);
    setCurrentPage(1);
  }

  const handlePageChange:PaginationProps['onChange'] = (page) => {
    setCurrentPage(page);
  }

  return {
    books,
    authors,
    form,
    authorRef,
    isModalOpen,
    statu,
    total,
    currentPage,
    showModal,
    handleOk,
    handleCancel,
    onFinish,
    onFinishFailed,
    handleDeleteClick,
    handleStatusChange,
    handlePageChange
  }
}
export default useBookList;