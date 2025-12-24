import { usePosts } from "../../hooks/usePosts";
import { PostList } from "../../components/post-list/PostList";

export default function PostsPage() {
  const { filteredPosts, loading, error } = usePosts();

  if (loading) return <div>Завантаження...</div>;
  if (error) return <div>{error}</div>;

  return <PostList posts={filteredPosts} />;
}

