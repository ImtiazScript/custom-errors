declare module '@emtiaj/custom-errors' {
    export class AppError extends Error {
      constructor(message?: string, statusCode?: number);
      statusCode: number;
      isOperational: boolean; // Indicates if the error is operational (expected) or programming (unexpected)
    }
  
    export class BadRequestError extends AppError {
      constructor(message?: string);
    }
  
    export class UnauthorizedError extends AppError {
      constructor(message?: string);
    }
  
    export class ForbiddenError extends AppError {
      constructor(message?: string);
    }
  
    export class NotFoundError extends AppError {
      constructor(message?: string);
    }
  
    export class MethodNotAllowedError extends AppError {
      constructor(message?: string);
    }
  
    export class ConflictError extends AppError {
      constructor(message?: string);
    }
  
    export class InternalServerError extends AppError {
      constructor(message?: string);
    }
  
    export class ServiceUnavailableError extends AppError {
      constructor(message?: string);
    }
  
    export function errorHandler(err: any, req: any, res: any, next: any): void;
  }
  