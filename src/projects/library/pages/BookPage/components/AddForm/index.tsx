import { createBook } from "~/src/projects/library/api/services/bookService";
import { Button, Form, Input, Select } from "antd";
import { FormInstance, useForm } from "antd/es/form/Form";
import { FC, useState } from "react";

interface IProps {
  form: FormInstance;
}

const AddForm:FC<IProps> = (props) => {

  const { form } = props;
  const onFinish = async (values: any) => {
    await createBook(values);
    
  }

  return (
    <Form
      name="book"
      form={form}
      onFinish={onFinish}
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[{
          required: true,
          message: "Please input book's title"
        }]}
      >
        <Input 
          placeholder="BOOK NAME"
        />
      </Form.Item>
      <Form.Item
        label="ISBN"
        name="isbn"
        rules={[{
          required: true,
          message: "Please input book's isbn"
        }]}
      >
        <Input 
          placeholder="ISBN"
        />
      </Form.Item>
      <Form.Item
        label="Cover"
        name="cover"
      >
        <Input 
          placeholder="COVER IMG URL"
        />
      </Form.Item>
    </Form>
  )
}

export default AddForm;