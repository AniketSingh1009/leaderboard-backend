const express = require("express");
const router = express.Router();

const{getLeaderBoard} = require('../controllers/LeaderBoard');

// routes for leaderboard
router.get('/leaderboard', getLeaderBoard);

module.exports = router;
