// src/config/database.js

import { Sequelize } from 'sequelize';
import constants from './constants.js'; // Import constants for configuration

// Create a new instance of Sequelize for PostgreSQL
const sequelize = new Sequelize(constants.DB_NAME, constants.DB_USER, constants.DB_PASSWORD, {
  host: constants.DB_HOST,
  port: constants.DB_PORT, // Use the port from constants
  dialect: 'postgres', // Specify the database dialect
  logging: false, // Disable logging; set to console.log to enable
});

// Function to connect to the database
const connectDB = async () => {
  try {
    await sequelize.authenticate(); // Test the connection
    console.log('PostgreSQL connected successfully');
  } catch (error) {
    console.error('Unable to connect to the PostgreSQL database:', error);
    process.exit(1); // Exit the process with failure
  }
};

// Export the Sequelize instance and the connectDB function
export { sequelize, connectDB };

