import express from "express";
const commentRouter = express.Router();
import {deleteComment, getOneComment, getAllComment, createComment, modifyComment} from "../controllers/comment.js";
import {auth} from "../middlewares/auth.js";

commentRouter.post('/create', auth, createComment);
commentRouter.get('/:id', auth, getOneComment);
commentRouter.get('/find/:id', auth, getAllComment);
commentRouter.delete('/:id', auth, deleteComment);
commentRouter.put('/:id', auth, modifyComment);






export default commentRouter;