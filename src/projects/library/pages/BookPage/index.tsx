import { Button, List, Modal } from "antd";
import { FC, useState } from "react";

import useAsyncEffect from "@/hooks/useAsyncEffect";

import { getBooks } from "~/src/projects/library/api/services/bookService";
import { getGenres } from "~/src/projects/library/api/services/genreService";

import BookCard from "./components/BookCard";
import FilterColumn from "./components/FilterColumn";
import AddForm from "./components/AddForm";
import EditForm from "./components/EditForm";

import { type Filter } from "./types";

import "./styles.scss";
import { useForm } from "antd/es/form/Form";

const bookStatus:{
  label:string,
  value:BookStatu
}[] = [
  {
    label: "阅读中",
    value: "READING"
  },
  {
    label: "未读",
    value: "UNREAD"
  },
  {
    label: "已读",
    value: "READED"
  }
];

enum ModalType {
  ADD = "ADD",
  EDIT = "EDIT"
}

const BookPage:FC = () => {

  const [data, setData] = useState<Book[]>();
  const [filter, setFilter] = useState<Filter>();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<ModalType>();

  const [form] = useForm();

  useAsyncEffect(async () => {
    // request: get books list
    const genreList = (await getGenres());
    setFilter({
      "genre":{
        title: "Genre",
        code: "_id",
        name: "name",
        defaultValue: null,
        values: genreList
      },
      "status":{
        title: "Status",
        code: "value",
        name: "label",
        defaultValue: bookStatus[0],
        values: bookStatus
      },
    })
  }, []);

  useAsyncEffect(async () => {
    // request: get books list
    if (filter && filter["status"] && filter["status"].defaultValue) {
      const status = filter["status"].defaultValue[filter["status"].code] as string;
      const bookList = (await getBooks({status})).booklist;
      console.log("status: ", filter["status"].defaultValue);
      setData(bookList);
    }
  }, [filter]);

  const handleClickBookCard = () => {
    setOpenModal(true);
    setModalType(ModalType.EDIT);
  }

  const handleClickBookAdd = () => {
    setOpenModal(true);
    setModalType(ModalType.ADD);
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
    setOpenModal(false);
    form.resetFields();
  }

  return (
    <div>
      <FilterColumn
        selectors={filter}
        setFilter={setFilter}
      />
      <Button
        onClick={handleClickBookAdd}
        type="primary"
      >
        + New book
      </Button>
      <List
        grid={{
          gutter: 32,
          xxl: 8
        }}
        pagination={{
          position:"bottom",
          align: "center",
          pageSize: 16
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <BookCard 
              title={item.title}
              authors={item.author}
              imgSrc={item.cover}
              handleClick={handleClickBookCard}
            />
          </List.Item>
        )}
      />
      {openModal && (
        <Modal
          title={modalType}
          open={openModal}
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
          {modalType === ModalType.ADD && (
            <AddForm form={form}/>
          )}
          {modalType === ModalType.EDIT && (
            <EditForm />
          )}
        </Modal>
      )}
    </div>
  )
}

export default BookPage;