const express = require('express');
const User = require('../models/User');

exports.getLeaderBoard = async (req, res) => {
  try {
    const users = await User.find()
      .sort({ totalPoints: -1 })  // Sort users by points in descending order
      .limit(10)                  // Limit the result to 10 users
      .exec();                    // Execute the query

    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
