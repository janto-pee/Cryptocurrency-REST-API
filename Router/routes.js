import express from 'express';
import { getCoins, addCoin, getCoin, updateCoin, deleteCoin } from '../Controllers/cryptos.js';

const router = express.Router();

// GET ALL CRYPTOS
router.get('/', getCoins)
// POST REQUEST TO ADD CRYPTOCURRENCIES
router.post('/', addCoin )
// GET ONE CRYPTO
router.get('/:id', getCoin)
// UPDATE A CRYPTO
router.patch('/:id', updateCoin )
// DELETE A CRYPTO
router.delete('/:id', deleteCoin )

export default router