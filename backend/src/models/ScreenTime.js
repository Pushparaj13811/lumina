import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const ScreenTime = sequelize.define('ScreenTime', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users', // Refers to the User model
      key: 'id',
    },
  },
  device: {
    type: DataTypes.STRING, // e.g., 'mobile', 'desktop'
    allowNull: false,
  },
  appName: {
    type: DataTypes.STRING, // Name of the app or website
    allowNull: false,
  },
  duration: {
    type: DataTypes.INTEGER, // Duration in minutes
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  timestamps: true,
});

export default ScreenTime;

