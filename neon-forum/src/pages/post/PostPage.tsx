import { useParams } from "react-router-dom";
import { usePost } from "../../hooks/usePost";
import PostContent from "./PostContent";
import PostActions from "./PostActions";
import PostComments from "./PostComments";
import styles from "./post.module.css";

const USER_ID = "1";

const PostPage = () => {
  const { id } = useParams();
  const { post, setPost, loading } = usePost(id);

  if (loading || !post) return <p>Завантаження...</p>;

  return (
    <div className={styles.page}>
      <PostContent post={post} />
      <PostActions post={post} setPost={setPost} userId={USER_ID} />
      <PostComments post={post} setPost={setPost} />
    </div>
  );
};

export default PostPage;
