import { Router } from "express";
import {
  getPosts,
  getPost,
  createPost,
  editPost,
  deletePost,
} from "../controllers/post.controller.js";
const router = Router();

router
  .get("/", getPosts)
  .get("/:id", getPost)
  .post("/", createPost)
  .put("/", editPost)
  .delete("/:id", deletePost);
  

export default router;
