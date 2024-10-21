const mongoose = require('mongoose');

const ClaimHistorySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  claimedPoints: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

const ClaimHistory = mongoose.model('ClaimHistory', ClaimHistorySchema);
module.exports = ClaimHistory;
