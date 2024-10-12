const { performSwap, monitorTokenPrice } = require('../services/swapService');
const Swap = require('../models/Swap');

// Inicia o swap com os parâmetros fornecidos
exports.initiateSwap = async (req, res) => {
  const { tokenA, tokenB, amount, userAddress } = req.body;

  try {
    const result = await performSwap(tokenA, tokenB, amount, userAddress);
    // Salvar swap no banco de dados
    const newSwap = new Swap({
      tokenA, tokenB, amount, userAddress, transactionHash: result.transactionHash
    });
    await newSwap.save();
    res.json({ success: true, result });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Monitora o preço do token e aciona o swap
exports.monitorPrice = async (req, res) => {
  const { tokenA, tokenB, targetPrice } = req.body;

  try {
    const result = await monitorTokenPrice(tokenA, tokenB, targetPrice);
    res.json({ success: true, message: 'Monitoring initiated', result });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
