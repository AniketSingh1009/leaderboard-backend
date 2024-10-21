const express = require("express");
const router = express.Router();

const{claimPoints,getClaimHistory} = require('../controllers/Claims');
  
// routes for claims
router.post('/claimpoints', claimPoints);
router.get('/claimhistory', getClaimHistory);


module.exports = router;