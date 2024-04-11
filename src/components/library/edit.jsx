import { Form } from "react-router-dom";
import styled from "styled-components";
import { library } from "../../data/Library";

const EditBookStyle = styled.div`
  position: fixed;
  z-index: 1;
  top: 50%;
  left: 50%;
  width: 300px;
  padding: var(--spacing-lg);
  border-radius: var(--border-radius);
  background-color: var(--grey);
  text-align: center;
  transform: translate(-50%, -50%) scale(1);
  transition: 0.2s ease-in-out;

  form {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`

export default function EditBook({book, closeEvent}) {
  return (
    <EditBookStyle>
      <Form 
        method="post"
        action=""
        onSubmit={closeEvent}
      >
        <h3>Add new book</h3>
        <input
          name="title"
          type="text"
          placeholder="Title"
          required
          maxLength={100}
        />
        <input
          name="author"
          type="text"
          placeholder="Author"
          required
          maxLength={100}
        />
        <input
          name="pages"
          type="number"
          placeholder="Pages"
          max={10000}
        />
        <input
          name="cover"
          type="text"
          placeholder="Cover URL"
        />
        <div>
          <label>Have you read it?</label>
          <input 
            name="isRead"
            type="checkbox" 
          />
        </div>
        <button 
          name="editType"
          value="add"
          type="submit"
        >Submit</button>
      </Form>
    </EditBookStyle>
  )
}