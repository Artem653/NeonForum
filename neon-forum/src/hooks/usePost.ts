import { useEffect, useState } from "react";
import { Post } from "../models/Post";

export const usePost = (id?: string) => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    setLoading(true);

    setTimeout(() => {
      setPost({
        id,
        title: "Найкращі RGB-сетапи 2025",
        content: "<p>Повний огляд топових RGB конфігурацій</p>",
        imageUrl: "/assets/post.jpg",
        likes: 12,
        likedBy: ["1"],
        comments: [],
      } as Post);

      setLoading(false);
    }, 500);
  }, [id]);

  return { post, setPost, loading, error };
};

