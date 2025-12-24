import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import PostsPage from "../pages/posts/PostsPage";
import PostPage from "../pages/post/PostPage";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/posts" element={<PostsPage />} />
      <Route path="/posts/:id" element={<PostPage />} />
    </Routes>
  );
}
