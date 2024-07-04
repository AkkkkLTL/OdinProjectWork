import { Author, Book } from "@router/Library/loaders/types";
import { Form, RadioChangeEvent } from "antd";
import { useState } from "react"
import { FormProps, useLoaderData, useNavigate, useOutletContext } from "react-router-dom";
import { FieldType } from "../BookList/types";
import { updateBook } from "@api/Library";

const useBookEdit = () => {
  const [open, setOpen] = useState(true);
  const [statusRadio, setStatusRadio] = useState("UNREAD");
  const { authors } = useOutletContext() as {authors: Author[]};
  const { book } = useLoaderData() as { book:Book };
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const showDraw = () => {
    setOpen(true);
  }

  const onClose = () => {
    setOpen(false);
    navigate("../");
  }

  const onStatusChange = ({target: {value}}: RadioChangeEvent) => {
    setStatusRadio(value);
  }

  const onFinish:FormProps<FieldType>['onFinish'] = async (values) => {
    console.log("Success:", values);
    await updateBook(book._id, values);
    navigate("../");
  }

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log("Failed:", errorInfo);
  }

  return {
    book,
    open,
    authors,
    form,
    showDraw,
    onClose,
    onFinish,
    onFinishFailed,
    onStatusChange,
    statusRadio
  }
}

export default useBookEdit;