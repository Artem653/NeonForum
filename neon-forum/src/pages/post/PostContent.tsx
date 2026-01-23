import styles from "./post.module.css";
//import { Post } from "../../models/Post";

const PostContent = ({ post }: { post: Post }) => (
  <div className={styles.card}>
    <h1>{post.title}</h1>
    <img src={post.imageUrl} alt="" />
    <div dangerouslySetInnerHTML={{ __html: post.content }} />
  </div>
);

export default PostContent;
