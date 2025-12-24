import { Post } from "../../shared/types/post";
import { Link } from "react-router-dom";

export function PostList({ posts }: { posts: Post[] }) {
  return (
    <>
      {posts.map(p => (
        <div key={p.id}>
          <Link to={`/posts/${p.id}`}>
            <h2>{p.title}</h2>
          </Link>
          <p>❤️ {p.likesCount}</p>
        </div>
      ))}
    </>
  );
}


