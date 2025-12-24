import { useState } from "react";
import { Comment } from "../shared/types/comment";

export function useComments(postId: number) {
  const [comments, setComments] = useState<Comment[]>([]);

  const addComment = async (body: string, userId: number) => {
    const res = await fetch(
      `http://localhost:3001/posts/${postId}/comments`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ body, userId })
      }
    );

    const data = await res.json();
    setComments(prev => [...prev, data]);
  };

  return { comments, setComments, addComment };
}
