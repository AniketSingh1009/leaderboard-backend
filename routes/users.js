const express = require("express");
const router = express.Router();

const{addUser, getUsers} = require('../controllers/Users');

// routes for users
router.get('/getuser', getUsers);
router.post('/adduser', addUser);

module.exports = router;