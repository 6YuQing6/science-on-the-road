import { createHashRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/HomePage";
import RecipesPage from "../pages/RecipesPage";
import AboutUsPage from "../pages/AboutUsPage";
import MarkdownPage from "../components/MarkdownPage";
// import MarkdownComponent from "../components/MarkdownComponent";

// https://stackoverflow.com/questions/71984401/react-router-not-working-with-github-pages
export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "recipes",
        element: <RecipesPage />,
        children: [{ path: ":filename", element: <MarkdownPage /> }],
      },
      { path: "about", element: <AboutUsPage /> },
    ],
  },
]);
