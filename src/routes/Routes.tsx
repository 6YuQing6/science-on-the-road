import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/HomePage";
import RecipesPage from "../pages/RecipesPage";
import AboutUsPage from "../pages/AboutUsPage";

export const router = createBrowserRouter([
  {
    path: "/sunny-portfolio",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "recipes", element: <RecipesPage /> },
      { path: "about", element: <AboutUsPage /> },
    ],
  },
]);
