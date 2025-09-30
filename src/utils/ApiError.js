export class ApiError extends Error {
  constructor(message, statusCode) {
    super(message);          
    this.statusCode = statusCode || 500; 
    this.success = false;    
    this.isOperational = true; 
    
    Error.captureStackTrace(this, this.constructor); 
  }
}
export default ApiError;
