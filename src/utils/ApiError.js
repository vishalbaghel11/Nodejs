// utils/appError.js
export class ApiError extends Error {
  constructor(message, statusCode) {
    super(message);           // Call parent constructor (Error)
    this.statusCode = statusCode || 500; // Default 500
    this.success = false;     // Optional flag for API responses
    this.isOperational = true; // Mark this error as "expected" (vs programming errors)
    
    Error.captureStackTrace(this, this.constructor); // Keeps stack trace clean
  }
}
export default ApiError;
