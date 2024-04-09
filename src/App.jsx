import { Route, RouterProvider } from "react-router-dom";
import { router } from "./router";
import RouterTutorialPage from "./pages/RouterTutorialPage";
import { Suspense, lazy } from "react";
import CVAppPage from "./pages/CVAppPage";



function App() {
  return (
    <>
      <RouterTutorialPage />
    </>
  );
}

export default App;