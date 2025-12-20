import { Post } from "../../shared/types/post";
import styles from "./post-list.module.css";

interface Props {
  posts: Post[];
}

export default function PostList({ posts }: Props) {
  return (
    <div className={styles.list}>
      {posts.map(post => (
        <div key={post.id} className={styles.card}>
          <h3>{post.title}</h3>
          <img src={post.imageUrl} />
          <p>{post.content}</p>
          <span>❤️ {post.likes}</span>
        </div>
      ))}
    </div>
  );
}

