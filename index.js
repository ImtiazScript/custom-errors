// index.js
class AppError extends Error {
    constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode;
      this.isOperational = true;
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  class BadRequestError extends AppError {
    constructor(message) {
      super(message || 'Bad Request', 400);
    }
  }
  
  class UnauthorizedError extends AppError {
    constructor(message) {
      super(message || 'Unauthorized', 401);
    }
  }
  
  // Export the custom errors
  module.exports = { BadRequestError, UnauthorizedError };
  