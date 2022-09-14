import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.config.js';

export const dailyMessage = sequelize.define('dailyMessage', {
  // Model attributes are defined here
  title:{
    type: DataTypes.STRING,
    allowNull: false
  },
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
}, { 
  // Other model options go here
  freezeTableName: true
});

// dailyMessage.sync();
// console.log("The table for the User model was just (re)created!");