import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const BurnoutRisk = sequelize.define('BurnoutRisk', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users', // Refers to the User model
      key: 'id',
    },
  },
  riskScore: {
    type: DataTypes.FLOAT, // Score between 0 and 100
    defaultValue: 0,
  },
  lastChecked: {
    type: DataTypes.DATE,
    allowNull: false,
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

export default BurnoutRisk;

