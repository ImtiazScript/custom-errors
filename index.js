class AppError extends Error {
    constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode;
      this.isOperational = true; // Indicates if the error is operational (expected) or programming (unexpected)
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
  
  class ForbiddenError extends AppError {
    constructor(message) {
      super(message || 'Forbidden', 403);
    }
  }
  
  class NotFoundError extends AppError {
    constructor(message) {
      super(message || 'Not Found', 404);
    }
  }
  
  class MethodNotAllowedError extends AppError {
    constructor(message) {
      super(message || 'Method Not Allowed', 405);
    }
  }
  
  class ConflictError extends AppError {
    constructor(message) {
      super(message || 'Conflict', 409);
    }
  }
  
  class InternalServerError extends AppError {
    constructor(message) {
      super(message || 'Internal Server Error', 500);
    }
  }
  
  class ServiceUnavailableError extends AppError {
    constructor(message) {
      super(message || 'Service Unavailable', 503);
    }
  }
  
  // Export the custom errors as named exports
  export {
    BadRequestError,
    UnauthorizedError,
    ForbiddenError,
    NotFoundError,
    MethodNotAllowedError,
    ConflictError,
    InternalServerError,
    ServiceUnavailableError
  };
  export { default as errorHandler } from './errorHandler';