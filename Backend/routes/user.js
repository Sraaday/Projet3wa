import express from "express";
const userRouter = express.Router();
import {deleteUser, getOneUser, login, signup} from "../controllers/user.js";

userRouter.post('/login', login);
userRouter.post('/signup', signup);
userRouter.get('/:id', getOneUser);
userRouter.delete('/:id', deleteUser);






export default userRouter;
