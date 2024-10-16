import ScreenTime from '../models/ScreenTime.js';
import ApiError from '../utils/apiError.js';

const trackScreenTime = async (req, res, next) => {
  const { userId, appName, device } = req.body; // Assuming these are sent in the request body
  const duration = req.body.duration || 0; // Duration in minutes

  if (!userId || !appName || !device) {
    return next(new ApiError(400, 'User ID, app name, and device are required'));
  }

  try {
    await ScreenTime.create({
      userId,
      appName,
      device,
      duration,
      date: new Date(),
    });
    next();
  } catch (error) {
    next(new ApiError(500, 'Error tracking screen time'));
  }
};

export default trackScreenTime;

