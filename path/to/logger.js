// Import required modules
const winston = require('winston');

try {
  // Create a logger instance
  const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
    ],
  });
  module.exports = logger;
} catch (err) {
  console.error('Error creating logger:', err);
  process.exit(1);
}