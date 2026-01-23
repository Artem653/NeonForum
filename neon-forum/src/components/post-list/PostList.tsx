import { Post } from "../../shared/types";
import PostCard from "./PostCard";

interface Props {
  posts: Post[];
}

export default function PostList({ posts }: Props) {
  return (
    <section>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          title={post.title}
          preview={post.content.slice(0, 120)}
          likes={post.likes}
          tags={post.tags}
        />
      ))}
    </section>
  );
}


