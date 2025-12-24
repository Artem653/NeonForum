import { useEffect, useState } from "react";
import { Post } from "../shared/types/post";

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setFilteredPosts(data);
      })
      .catch(() => setError("Помилка завантаження постів"))
      .finally(() => setLoading(false));
  }, []);

  return { posts, filteredPosts, setFilteredPosts, loading, error };
}

