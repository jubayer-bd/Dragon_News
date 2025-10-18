import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoriesNews from "../Pages/CategoriesNews";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/category/:id",
        element: <CategoriesNews />,
        loader: () => fetch("/news.json"),
      },
    ],
  },
  {
    path: "/auth",
    element: <h2>Home </h2>,
  },
  {
    path: "/news",
    element: <h2>Home </h2>,
  },
]);
