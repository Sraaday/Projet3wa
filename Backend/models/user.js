import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.config.js';

export const User = sequelize.define('User', {
  // Model attributes are defined here
  pseudo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  mail: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  }, 
}, { 
  // Other model options go here
  freezeTableName: true
});

// User.sync();
// console.log("The table for the User model was just (re)created!");