const express = require('express');
const User = require('../models/User');
const ClaimHistory = require('../models/ClaimHistory');

exports.claimPoints = async (req, res) => {
  const { userId } = req.body;
  const randomPoints = Math.floor(Math.random() * 10) + 1;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.totalPoints += randomPoints;
    await user.save();

    const newClaim = new ClaimHistory({
      userId,
      claimedPoints: randomPoints,
    });
    await newClaim.save();

    res.json({ user, claimedPoints: randomPoints });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getClaimHistory = async (req, res) => {
  try {
    const claims = await ClaimHistory.find().populate('userId');
    res.json(claims);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};