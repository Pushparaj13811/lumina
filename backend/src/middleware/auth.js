import jwt from 'jsonwebtoken';
import ApiError from '../utils/apiError.js';

const auth = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return next(new ApiError(401, 'Access token is missing'));
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(new ApiError(403, 'Invalid access token'));
    }
    req.user = user; // Attach user info to the request
    next();
  });
};

export default auth;

