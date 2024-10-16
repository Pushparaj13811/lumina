import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const WellnessData = sequelize.define('WellnessData', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users', // Refers to the User model
      key: 'id',
    },
  },
  screenTime: {
    type: DataTypes.INTEGER, // Total screen time in minutes
    defaultValue: 0,
  },
  workLifeBalanceScore: {
    type: DataTypes.FLOAT, // Score between 0 and 100
    defaultValue: 0,
  },
  burnoutRisk: {
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

export default WellnessData;

