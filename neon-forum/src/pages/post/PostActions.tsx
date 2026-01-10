import { Post } from "../../models/Post";
import { useAddLike } from "../../hooks/useAddLike";
import { useRemoveLike } from "../../hooks/useRemoveLike";
import styles from "./post.module.css";

const PostActions = ({ post, setPost, userId }: any) => {
  const { addLike } = useAddLike();
  const { removeLike } = useRemoveLike();

  const isLiked = post.likedBy.includes(userId);

  const toggleLike = async () => {
    if (isLiked) {
      await removeLike(post.id, userId);
      setPost({
        ...post,
        likes: post.likes - 1,
        likedBy: post.likedBy.filter((id: string) => id !== userId),
      });
    } else {
      await addLike(post.id, userId);
      setPost({
        ...post,
        likes: post.likes + 1,
        likedBy: [...post.likedBy, userId],
      });
    }
  };

  return (
    <button className={styles.likeBtn} onClick={toggleLike}>
      💙 {post.likes}
    </button>
  );
};

export default PostActions;
