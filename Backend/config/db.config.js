import {  Sequelize  } from "sequelize";
import { CONFIG } from "./config.js";


const {DB_NAME, DB_HOST, DB_DIALECT, DB_PASSWORD, DB_USER, DB_PORT } = CONFIG;


 export const sequelize =  new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: DB_DIALECT,
    port: DB_PORT
  })
  try {
   await sequelize.authenticate();
   sequelize.sync()
    console.log('Connection has been established successfully.');
    console.log(sequelize.config)
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }



