import { Router } from "express";
import { Post, Comment, PostLike, User } from "../models";

const router = Router();

router.get("/", async (_, res) => {
  const posts = await Post.findAll();
  res.json(posts);
});

router.get("/:id", async (req, res) => {
  const include = [];

  if (req.query.include?.includes("comments")) {
    include.push({ model: Comment, include: ["author"] });
  }

  if (req.query.include?.includes("likedBy")) {
    include.push({ model: User, as: "likedBy" });
  }

  const post = await Post.findByPk(req.params.id, { include });
  res.json(post);
});

router.post("/:postId/comments", async (req, res) => {
  const comment = await Comment.create({
    body: req.body.body,
    postId: req.params.postId,
    authorId: req.body.userId
  });

  res.json(comment);
});

router.put("/:postId/likes/:userId", async (req, res) => {
  await PostLike.create({
    postId: req.params.postId,
    userId: req.params.userId
  });

  res.sendStatus(204);
});

router.delete("/:postId/likes/:userId", async (req, res) => {
  await PostLike.destroy({
    where: {
      postId: req.params.postId,
      userId: req.params.userId
    }
  });

  res.sendStatus(204);
});

export default router;
