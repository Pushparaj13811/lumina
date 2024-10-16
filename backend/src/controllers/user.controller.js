// src/controllers/user.controller.js

import User from '../models/User.js';
import ApiError from '../utils/apiError.js';

// Create a new user
export const createUser = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.create({ name, email, password });
    res.status(201).json(user);
  } catch (error) {
    next(new ApiError(400, 'User creation failed'));
  }
};

// Update user details
export const updateUser = async (req, res, next) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  try {
    const user = await User.findByPk(id);
    if (!user) {
      return next(new ApiError(404, 'User not found'));
    }

    user.name = name || user.name;
    user.email = email || user.email;
    user.password = password || user.password;
    await user.save();

    res.status(200).json(user);
  } catch (error) {
    next(new ApiError(400, 'User update failed'));
  }
};

// Delete a user
export const deleteUser = async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await User.findByPk(id);
    if (!user) {
      return next(new ApiError(404, 'User not found'));
    }

    await user.destroy();
    res.status(204).send();
  } catch (error) {
    next(new ApiError(400, 'User deletion failed'));
  }
};

// Get user details
export const getUserDetails = async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await User.findByPk(id);
    if (!user) {
      return next(new ApiError(404, 'User not found'));
    }

    res.status(200).json(user);
  } catch (error) {
    next(new ApiError(400, 'Failed to retrieve user details'));
  }
};

// Get all user details
export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    next(new ApiError(400, 'Failed to retrieve users'));
  }
};

