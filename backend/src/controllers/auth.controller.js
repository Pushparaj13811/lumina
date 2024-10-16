// src/controllers/auth.controller.js

import { OAuth2Client } from 'google-auth-library';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import constants from '../config/constants.js';
import ApiError from '../utils/apiError.js';

const client = new OAuth2Client(constants.GOOGLE_CLIENT_ID);

// Google Sign-In
export const googleSignIn = async (req, res, next) => {
  const { idToken } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken,
      audience: constants.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const { email, name, picture } = payload;

    let user = await User.findOne({ where: { googleId: payload.sub } });

    if (!user) {
      user = await User.create({
        name,
        email,
        googleId: payload.sub,
        avatar: picture,
      });
    }

    const token = jwt.sign({ id: user.id }, constants.JWT_SECRET, {
      expiresIn: constants.JWT_EXPIRATION,
    });

    res.status(200).json({ token, user });
  } catch (error) {
    next(new ApiError(500, 'Google Sign-In failed'));
  }
};

