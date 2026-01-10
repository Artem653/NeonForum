import { useState } from "react";

export const useRemoveLike = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const removeLike = async (postId: string, userId: string) => {
    setLoading(true);
    setError(null);

    await new Promise((res) => setTimeout(res, 300));

    setLoading(false);
    return true;
  };

  return { removeLike, loading, error };
};

