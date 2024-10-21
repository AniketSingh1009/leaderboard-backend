const express = require('express');
const User = require('../models/User');
const router = express.Router();
// get all the users


exports.getUsers = async (req, res) => {  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addUser = async (req, res) => {
  const { name } = req.body;
  // validate data
  if (!name) return res.status(400).json({ message: 'Name is required' });
  try {
    const newUser = new User({ name });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

