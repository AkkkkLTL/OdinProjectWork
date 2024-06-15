import { useLoaderData, useNavigate } from "react-router-dom";
import { EditForm } from "./styles";
import { loaderResData } from "./types";

export const EditContact = () => {

  const { contact } = useLoaderData() as loaderResData;
  const navigate = useNavigate();

  return (
    <EditForm method="post">
      <p>
        <span>Name</span>
        <input
          type="text"
          placeholder="First"
          aria-label="First Name"
          name="first"
          defaultValue={contact.first}
        />
        <input
          type="text"
          placeholder="Last"
          aria-label="Last Name"
          name="last"
          defaultValue={contact.last}
        />
      </p>
      <label>
        <span>Twitter</span>
        <input
          type="text"
          placeholder="@jack"
          name="twitter"
          defaultValue={contact.twitter}
        />
      </label>
      <label>
        <span>Avatar URL</span>
        <input
          type="text"
          placeholder="https://example.com/avatar.jpg"
          aria-label="Avatar URL"
          name="avatar"
          defaultValue={contact.avatar}
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea
          rows={6}
          name="notes"
          defaultValue={contact.notes}
        />
      </label>
      <p>
        <button type="submit">Save</button>
        <button type="button"
          onClick={() => {
            navigate(-1);
          }}
        >
          Cancel
        </button>
      </p>
    </EditForm>
  );
}