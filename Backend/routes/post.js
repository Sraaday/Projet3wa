import express from "express";
const postRouter = express.Router();
import {deletePost, getOnePost, getAllPost, createPost, modifyPostTitle} from "../controllers/post.js";
import { multerImage} from "../middlewares/multer-config.js";
import {auth} from "../middlewares/auth.js";

postRouter.post('/create', auth, multerImage, createPost);
postRouter.get('/:id', auth, getOnePost);
postRouter.get('', auth, getAllPost);
postRouter.delete('/:id', auth, deletePost);
postRouter.put('/:id', auth, modifyPostTitle);






export default postRouter;