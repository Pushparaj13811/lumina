import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const WorkLifeBalance = sequelize.define('WorkLifeBalance', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users', // Refers to the User model
      key: 'id',
    },
  },
  workSessions: {
    type: DataTypes.INTEGER, // Number of work sessions
    defaultValue: 0,
  },
  breakSessions: {
    type: DataTypes.INTEGER, // Number of break sessions
    defaultValue: 0,
  },
  workLifeBalanceScore: {
    type: DataTypes.FLOAT, // Score between 0 and 100
    defaultValue: 0,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: true,
});

export default WorkLifeBalance;

