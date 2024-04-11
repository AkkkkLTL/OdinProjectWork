import { Route, RouterProvider } from "react-router-dom";
import { router } from "./router";
import RouterTutorialPage from "./pages/RouterTutorialPage";
import { Suspense, lazy } from "react";
import CVAppPage from "./pages/CVAppPage";
import LibraryPage from "./pages/LibraryPage";



function App() {
  return (
    <>
      <LibraryPage />
    </>
  );
}

export default App;