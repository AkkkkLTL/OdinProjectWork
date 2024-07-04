import { Button, Drawer, Form, Input, Radio, Select, Space } from "antd";
import useBookEdit from "./useEdit";
import { FieldType } from "../BookList/types";
import { statusOptions } from "./constant";

export const Edit = () => {

  const {
    open,
    book,
    authors,
    form,
    showDraw,
    onStatusChange,
    onClose,
    statusRadio,
    onFinish,
    onFinishFailed
  } = useBookEdit();

  console.log("Book");
  console.log(book);
  return (
    <Drawer
      title="Edit Book"
      open={open}
      onClose={onClose}
      width={720}
      extra={
        <Space>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={() => {
            form.submit();
          }}
          >
            Submit
          </Button>
        </Space>
      }
    >
      <Form
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item<FieldType>
          label="Title"
          name="title"
          initialValue={book.title}
          rules={[{
            required: true,
            message: "Please input book's title"
          }]}
        >
          <Input 
            value={book.title}
            placeholder="BOOK NAME"
          />
        </Form.Item>
        <Form.Item<FieldType>
          label="ISBN"
          name="isbn"
          initialValue={book.isbn}
          rules={[{
            required: true,
            message: "Please input book's isbn"
          }]}
        >
          <Input 
            value={book.isbn}
            placeholder="BOOK ISBN"
          />
        </Form.Item>
        <Form.Item<FieldType>
          label="Author(s)"
          name="author"
          initialValue={book.author.map((role) => role._id)}
          rules={[{
            required: true,
            message: "Please select author(s)"
          }]}
        >
          <Select
            mode="multiple"
            placeholder="AUTHOR(S)"
          >
            {authors.map((author) => (
              <Select.Option 
                key={`book-${author._id}`}
                value={author._id}
              >
                {author.full_name || ''}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item<FieldType>
          label="Cover"
          name="cover"
          initialValue={book.cover}
        >
          <Input 
            placeholder="COVER IMG URL"
          />
        </Form.Item>
        <Form.Item<FieldType>
          label="Status"
          name="status"
          initialValue={book.status ?? "UNREAD"}
        >
          <Radio.Group
            options={statusOptions}
            onChange={onStatusChange}
            value={statusRadio}
          />
        </Form.Item>
      </Form>
    </Drawer>
  );
}