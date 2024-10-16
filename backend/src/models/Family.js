import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Family = sequelize.define('Family', {
  parentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users', // Refers to the User model
      key: 'id',
    },
  },
  childId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users', // Refers to the User model
      key: 'id',
    },
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

export default Family;

