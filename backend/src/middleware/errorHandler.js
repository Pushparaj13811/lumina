import ApiError from '../utils/apiError.js';
import ApiResponse from '../utils/apiResponse.js';

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  res.status(statusCode).json(ApiResponse.error(statusCode, message));
};

export default errorHandler;

