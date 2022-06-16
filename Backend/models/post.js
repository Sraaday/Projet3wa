import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.config.js';

export const Post = sequelize.define('Post', {
  // Model attributes are defined here
  Title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
    // allowNull defaults to true
  },
  imgUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
}, { 
  // Other model options go here
  freezeTableName: true,
});

// Post.sync();
// console.log("The table for the User model was just (re)created!");