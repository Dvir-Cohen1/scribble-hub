import { Router } from "express";
const router = Router();
import postsRoutes from "./posts.routes.js";

router.use("/posts", postsRoutes);

// Handle not found requests
router.all("*", (req, res, next) => {
  res.send("Not Found!");
});

export default router;
