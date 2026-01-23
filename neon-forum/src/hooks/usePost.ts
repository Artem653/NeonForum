import { useEffect, useState } from "react";
import { Post } from "../shared/types";

export function usePost(id?: number) {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) return;
    setLoading(true);

    setTimeout(() => {
      setPost({
        id,
        title: "Пост",
        content: "Контент",
        likes: 10,
        tags: [],
        likedBy: [],
      });
      setLoading(false);
    }, 500);
  }, [id]);

  return { post, setPost, loading };
}

