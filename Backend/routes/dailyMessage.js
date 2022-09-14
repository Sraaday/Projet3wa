import express from "express";
import { createDailyMessage, getDaily } from "../controllers/dailyMessage.js";
const dailyMessageRouter = express.Router();
import {auth} from "../middlewares/auth.js";

dailyMessageRouter.post('/create', auth, createDailyMessage);
dailyMessageRouter.get('/', auth, getDaily);






export default dailyMessageRouter;