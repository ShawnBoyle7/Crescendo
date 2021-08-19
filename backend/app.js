// External imports
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const { ValidationError } = require('sequelize');

// Production checker
const { environment } = require('./config');
const isProduction = environment === 'production';

// Application
const app = express();

// Using external imports
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(helmet({
  contentSecurityPolicy: false
}));


// Use CORS outside of production because react frontend won't be serverd from the express server. (?)
if (!isProduction) {
  app.use(cors());
};

// Automatically applies csurf cookies under the conditions defined.
app.use(
  csurf({
    cookie: {
      secure: isProduction,
      sameSite: isProduction && "LAX",
      httpOnly: true,
    },
  })
  );
  
// Routes
const routes = require('./routes');
app.use(routes);

// Resource not found error handler
app.use((_req, _res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.title = "Resource Not Found";
  err.errors = ["The requested resource couldn't be found."];
  err.status = 404;
  next(err);
});

// Sequelize error handler
app.use((err, _req, _res, next) => {
  // check if error is a Sequelize error:
  if (err instanceof ValidationError) {
    err.errors = err.errors.map((e) => e.message);
    err.title = 'Validation error';
  }
  next(err);
});

// Error formatter and catch all handler
app.use((err, _req, res, _next) => {
  res.status(err.status || 500);
  console.error(err);
  res.json({
    title: err.title || 'Server Error',
    message: err.message,
    errors: err.errors,
    stack: isProduction ? null : err.stack,
  });
});

module.exports = app;