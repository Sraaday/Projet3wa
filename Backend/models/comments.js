import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.config.js';

export const Comment = sequelize.define('Comment', {
  // Model attributes are defined here
  content: {
    type: DataTypes.STRING,
    allowNull: false
  },
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
    // allowNull defaults to true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  postId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }, 
}, { 
  // Other model options go here
  freezeTableName: true
});

