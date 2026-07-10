// Import required modules
const express = require('express');
const app = express();
const logger = require('./logger');

try {
  // Set up logging
  logger.info('Application started');

  // Define a route to check if the app is working
  app.get('/', (req, res) => {
    res.send('Enatega Multivendor Customer App is working');
  });

  // Start the server
  const port = 3000;
  app.listen(port, () => {
    logger.info(`Server started on port ${port}`);
  });
} catch (err) {
  logger.error('Error starting the server:', err);
  process.exit(1);
}