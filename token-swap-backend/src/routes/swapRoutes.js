const express = require('express');
const { initiateSwap, monitorPrice } = require('../controllers/swapController');
const router = express.Router();

// Rota para iniciar o swap
router.post('/', initiateSwap);

// Rota para monitorar o preço e acionar o swap
router.post('/monitor', monitorPrice);

module.exports = router;
