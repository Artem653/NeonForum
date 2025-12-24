import { useParams } from "react-router-dom";
import { usePost } from "../../hooks/usePost";
import { Comments } from "../../components/comments/Comments";

export default function PostPage() {
  const { id } = useParams();
  const post = usePost(Number(id), ["comments", "likedBy"]);

  if (!post) return <p>Завантаження...</p>;

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Comments postId={post.id} />
    </>
  );
}
