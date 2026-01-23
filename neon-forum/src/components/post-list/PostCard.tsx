import { Link } from "react-router-dom";
import { Tag } from "../../shared/types";

interface Props {
  id: number;
  title: string;
  preview: string;
  likes: number;
  tags: Tag[];
}

export default function PostCard({ id, title, preview, likes, tags }: Props) {
  return (
    <article>
      <Link to={`/posts/${id}`}>
        <h3>{title}</h3>
      </Link>
      <p>{preview}</p>
      <span>❤️ {likes}</span>
      <div>
        {tags.map((t) => (
          <span key={t.id}>#{t.name}</span>
        ))}
      </div>
    </article>
  );
}