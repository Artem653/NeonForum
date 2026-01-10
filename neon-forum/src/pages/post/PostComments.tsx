import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { useCreateComment } from "../../hooks/useCreateComment";
import styles from "./post.module.css";

const PostComments = ({ post, setPost }: any) => {
  const [text, setText] = useState("");
  const { createComment } = useCreateComment();

  const submit = async () => {
    const comment = await createComment(post.id, text);
    setPost({ ...post, comments: [...post.comments, comment] });
    setText("");
  };

  return (
    <div className={styles.comments}>
      <ReactQuill value={text} onChange={setText} />
      <button onClick={submit}>Відправити</button>
    </div>
  );
};

export default PostComments;
