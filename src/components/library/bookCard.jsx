import { useFetcher } from "react-router-dom"
import styled from "styled-components"

const BookCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 20px;
  gap: var(--spacing-lg);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius);
  background-color: var(--white);
  box-shadow: var(--shadow);
  line-height: 1.2;

  .btngroup {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
`

export default function BookCard({id,title, author, pages, status}) {
  const fetcher = useFetcher();
  return (
    <BookCardStyle>
      <p>{title}</p>
      <p>{author}</p>
      <p>{`${pages ?? '0'} pages`}</p>
      <div className="btngroup">
        <fetcher.Form method="post">
          <button
            name="editType"
            value={`changeStatus ${id} ${status}`}
          >{status}</button>
        </fetcher.Form>
        <fetcher.Form method="post">
          <button
            name="editType"
            value={`delete ${id}`}
          >Remove</button>
        </fetcher.Form>
      </div>
    </BookCardStyle>
  )
}