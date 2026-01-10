import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/home/HomePage";
import Posts from "../pages/posts/PostsPage";
import PostPage from "../pages/post/PostPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "posts", element: <Posts /> },
      { path: "posts/:id", element: <PostPage /> },
    ],
  },
]);
