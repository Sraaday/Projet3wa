import express from "express";
const router = express.Router();
import userRouter from "../routes/user.js";
import postRouter from "../routes/post.js";
import commentRouter from "../routes/comment.js";
import dailyMessage from "../routes/dailyMessage.js";

router.use("/user", userRouter);
router.use("/post", postRouter);
router.use("/comment", commentRouter);
router.use("/dailyMessage", dailyMessage)

export default router;