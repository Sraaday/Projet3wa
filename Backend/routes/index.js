import express from "express";
const router = express.Router();
import userRouter from "../routes/user.js";
import postRouter from "../routes/post.js";
import commentRouter from "../routes/comment.js";

router.use("/user", userRouter);
router.use("/post", postRouter);
router.use("/comment", commentRouter)

export default router;