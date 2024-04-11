import { createGlobalStyle } from "styled-components";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "../components/library/routes/root";

const GlobalStyle = createGlobalStyle`
  :root {
    --white: #fffbfb;
    --grey: #f0eef1;
    --black: #050505;
    --red: #ff7070;
    --light-green: #9fff9c;
    --light-red: #ff9c9c;
    --border-radius: 8px;
    --spacing-xs: 5px;
    --spacing-sm: 10px;
    --spacing-md: 15px;
    --spacing-lg: 20px;
    --spacing-xl: 40px;
    --container-width: 1200px;
    --shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }

  html {
    position: relative;
    min-height: 100%;
  }

  body {
    background-color: var(--grey);
    color: var(--black);
    font-family: 'Madimi One' sans-serif;
    font-size: 18px;
    font-weight: 500;
    word-wrap: break-word;
    margin-bottom: 100px;
  }
`

const ResetStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    action: rootAction,
  }
], {
  basename: '/OdinProjectWork',
});


export default function LibraryPage() {

  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  )
}