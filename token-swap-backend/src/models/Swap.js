const mongoose = require('mongoose');

const SwapSchema = new mongoose.Schema({
  tokenA: { type: String, required: true },
  tokenB: { type: String, required: true },
  amount: { type: Number, required: true },
  userAddress: { type: String, required: true },
  swapTimestamp: { type: Date, default: Date.now },
  transactionHash: { type: String, required: true }
});

module.exports = mongoose.model('Swap', SwapSchema);
