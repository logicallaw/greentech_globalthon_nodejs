/*
 * This is file of the project High-Hackers
 * Licensed under the MIT License.
 * Copyright (c) 2025 High-Hackers
 * For full license text, see the LICENSE file in the root directory or at
 * https://opensource.org/license/mit
 * Author: logicallaw
 * Latest Updated Date: 2025-01-19
 */

// 1. Import modules
const express = require('express');
const dotenv = require('dotenv');
const nunjucks = require('nunjucks');
const path = require('path');
const morgan = require('morgan');
const cookie_parser = require('cookie-parser');
const session = require('express-session');
const logger = require('./logs/logger');
const hpp = require('hpp');
const cors = require('cors');

// Import custom modules
const main_router = require('./routes/main');
const detect_router = require('./routes/detect');

// 2. Set environment variables
dotenv.config();

// 3. Initialize application
const app = express();
app.set('port', process.env.PORT);
app.set('trust proxy', 1);  // Set trust proxy
app.set('view engine', 'html');
nunjucks.configure('views', {
  express: app,
  watch: true,
});

// 4. Set security and performance (CORS)
app.use(cors());

// 5. Set middlewares
if (process.env.NODE_ENV == 'production') {
  app.use(morgan('combined'));  // Production logging
  app.use(hpp());               // Prevent HTTP parameter pollution
} else {
  app.use(morgan('dev'));  // Development logging
}
app.use(express.static(path.join(__dirname, 'public')));  // Static file serving
app.use(cookie_parser(process.env.COOKIE_SECRET));  // Cookie parser with secret
app.use(express.json(
    {limit: '10mb'}));  // JSON body parsing, JSON request size limit increased
app.use(express.urlencoded({
  limit: '10mb',
  extended: false
}));  // URL-encoded body parsing, URL-encoded request size limit increased

// Set session
const session_options = {
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
    sameSite: 'strict',      // CSRF Protection
    maxAge: 1000 * 60 * 60,  // 1 hours
  },
};
app.use(session(session_options));

// 7. Set routers
app.use('/', main_router);
app.use('/detect', detect_router);

// 8. Error Handling Middleware
app.use((req, res, next) => {
  const error = new Error(`Not existed ${req.method} ${req.url} routes.`);
  error.status = 404;
  logger.info(`404 Error: ${req.method} ${req.url} route not found`);
  logger.error(error.message);
  next(error);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'production' ?
      err :
      {};  // Detailed errors can only be found in a development environment
  res.status(err.status || 500);
  res.render('error');
});

// 9. Export module
module.exports = app;