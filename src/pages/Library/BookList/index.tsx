import { 
  BookCard, 
  BookList, 
  BookMain, 
  BooksPageHeader,
  CustomContent,
  CustomSearch
} from "./styles";
import useBookList from "./useBookList";
import { Outlet, Link } from "react-router-dom";
import { Button, Form, Image, Input, Modal, Select, Tag } from "antd";
import { FieldType } from "./types";
import Meta from "antd/es/card/Meta";
import Icon from "@mdi/react";
import { mdiBookEditOutline, mdiTrashCanOutline } from "@mdi/js";
import { useRef, useState } from "react";
import { createAuthor } from "@api/Library";

const { Option } = Select;

export const BookPage = () => {

  const errorImg = "data:image/png;base64,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";
  const [stateAuthorSearch, setStateAuthorSearch] = useState('');
  const [updateAuthorSelect, setUpdateAuthorSelect] = useState(false);
  const authorRef = useRef(null);

  const onAuthorSearch = (value:string) => {
    setStateAuthorSearch(value);
  }


  const { 
    books,
    authors,
    form,
    isModalOpen, 
    showModal,
    handleOk,
    handleCancel,
    onFinish,
    onFinishFailed,
    handleDeleteClick
  } = useBookList();


  const clickAddAuthor = async () => {
    // request create a new author and get response create info
    const author = (await createAuthor(stateAuthorSearch))?.data;
    if (author) authors.unshift(author);
  }

  return (
    <BookMain>
      <BooksPageHeader>
        <CustomSearch
          placeholder="input search text"
        />
        <Button
          onClick={showModal}
          type="primary"
        >
          + New book
        </Button>
      </BooksPageHeader>
      <CustomContent>
        {books.length && (
          <BookList
            $cardwidth = {180}
          >
            {books.map((book) => (
              <BookCard
                key={book._id}
                $color={book.status == "READED" ? "green" : book.status == "UNREAD" ? "gray" : "red"}
                hoverable
                style={{width: 180}}
                cover={
                  <img 
                    alt={book.title} 
                    src={book.cover ?? errorImg} 
                    onError={({currentTarget}) => {
                      const regex = /\/\/images.weserv.nl\/*/g
                      if ( (!currentTarget.src) || currentTarget.src.match(regex)) {
                        currentTarget.onerror = null;
                        currentTarget.src = errorImg;
                      } else {
                        currentTarget.src = currentTarget.src.replace("", "//images.weserv.nl/?url=");
                      }
                    }}
                  />
                }
                actions={[
                  <Link
                    to={`./${book._id}/edit`}
                  >
                    <Button 
                      icon={<Icon path={mdiBookEditOutline} size={1} />}
                    />
                  </Link>,
                  <Button 
                    onClick={() => {
                      handleDeleteClick(book._id);
                    }}
                    icon={<Icon path={mdiTrashCanOutline} size={1} />}
                  />
                ]}
              >
                <Meta 
                  title={book.title} 
                  description={book.author.map((role) => role.full_name).join(" & ")}
                />
              </BookCard>
            ))}
          </BookList>
        )}
      </CustomContent>
      <Modal
        title="Add new book"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button 
            key="submit"
            htmlType="submit"
            type="primary"
            onClick={() => {
              form.submit()
            }}
          >
            Submit
          </Button>,
          <Button
            key="cancel"
            onClick={handleCancel}
          >
            Cancel
          </Button>
        ]}
      >
        <Form
          name="book"
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item<FieldType>
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
          <Form.Item<FieldType>
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
          <Form.Item<FieldType>
            label="Author(s)"
            name="author"
            rules={[{
              required: true,
              message: "Please select author(s)"
            }]}
          >
            <Select
              mode="multiple"
              ref={authorRef}
              placeholder="AUTHOR(S)"
              optionFilterProp="label"
              onSearch={onAuthorSearch}
              notFoundContent={
                <Button
                  onClick={clickAddAuthor}
                >
                  Add {stateAuthorSearch}
                </Button>
              }
              options={authors.map((author) => {
                return {
                  label: author.full_name,
                  value: author._id,
                }
              })}
            />
          </Form.Item>
          <Form.Item<FieldType>
            label="Cover"
            name="cover"
          >
            <Input 
              placeholder="COVER IMG URL"
            />
          </Form.Item>
        </Form>
      </Modal>
      <Outlet 
        context={{authors}}
      />
    </BookMain>
  );
}