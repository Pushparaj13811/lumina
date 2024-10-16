// src/config/constants.js

const constants = {
  // Database configuration
  DB_NAME: process.env.DB_NAME || 'lumina_db', // Default database name
  DB_USER: process.env.DB_USER || 'your_database_user', // Default database user
  DB_PASSWORD: process.env.DB_PASSWORD || 'your_database_password', // Default database password
  DB_HOST: process.env.DB_HOST || 'localhost', // Default database host
  DB_PORT: process.env.DB_PORT || 5432, // Default PostgreSQL port

  // JWT configuration
  JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret', // Secret for signing JWTs
  JWT_EXPIRATION: process.env.JWT_EXPIRATION || '1h', // Default expiration time for JWTs

  // Google OAuth configuration
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || 'your_google_client_id',
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET || 'your_google_client_secret',

  // Apple OAuth configuration
  APPLE_CLIENT_ID: process.env.APPLE_CLIENT_ID || 'your_apple_client_id',
  APPLE_TEAM_ID: process.env.APPLE_TEAM_ID || 'your_apple_team_id',
  APPLE_KEY_ID: process.env.APPLE_KEY_ID || 'your_apple_key_id',
  APPLE_PRIVATE_KEY: process.env.APPLE_PRIVATE_KEY || 'your_apple_private_key',

  // Add these lines to src/config/constants.js
KAFKA_HOST: process.env.KAFKA_HOST || 'localhost', // Default Kafka host
KAFKA_PORT: process.env.KAFKA_PORT || 9092, // Default Kafka port

  // Other constants
  PORT: process.env.PORT || 3000, // Default port for the application
  API_VERSION: '/api/v1', // API versioning
  LOG_LEVEL: process.env.LOG_LEVEL || 'info', // Default log level
};

export default constants;

