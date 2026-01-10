import { useState } from "react";

export const useCreateComment = () => {
  const [loading, setLoading] = useState(false);

  const createComment = async (postId: string, content: string) => {
    setLoading(true);

    await new Promise((res) => setTimeout(res, 400));

    setLoading(false);

    return {
      id: Date.now().toString(),
      content,
      author: "You",
      createdAt: new Date().toISOString(),
    };
  };

  return { createComment, loading };
};
