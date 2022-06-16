import "dotenv/config.js";
import "./config/db.config.js";
import express from "express";
import bodyParser from "body-parser";
const app = express();
import { CONFIG } from "./config/config.js";
const { PORT, DB_HOST, DB_PASSWORD, DB_NAME, DB_USER, DB_DIALECT } = CONFIG;
import router from "./routes/index.js";
import path from "path";
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));



app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/api', router);
app.listen(PORT, () => {
    console.log(`APP RUNNING ON http://${DB_HOST}:${PORT}`);
  });
