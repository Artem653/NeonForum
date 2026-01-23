import { useParams } from "react-router-dom";
import { usePost } from "../../hooks/usePost";
//import Comments from "../../components/comments/Comments";

export default function PostPage() {
  const { id } = useParams();
  const userId = 1;

  const { post, loading } = usePost(Number(id));

  if (loading) return <p>Завантаження...</p>;
  if (!post) return <p>Пост не знайдено</p>;

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Comments postId={post.id} />
    </>
  );
}