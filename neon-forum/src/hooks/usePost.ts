import { useEffect, useState } from "react";
import { Post } from "../shared/types/post";

export function usePost(id: number, include: string[] = []) {
  const [post, setPost] = useState<Post | null>(null);

  const query = include.map(i => `include=${i}`).join("&");

  useEffect(() => {
    fetch(`http://localhost:3001/posts/${id}?${query}`)
      .then(res => res.json())
      .then(setPost);
  }, [id]);

  return post;
}

