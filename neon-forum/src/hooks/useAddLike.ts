import { useState } from "react";

export const useAddLike = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addLike = async (postId: string, userId: string) => {
    setLoading(true);
    setError(null);

    await new Promise((res) => setTimeout(res, 300));

    setLoading(false);
    return true;
  };

  return { addLike, loading, error };
};
