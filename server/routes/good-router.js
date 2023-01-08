const express = require("express");
const Good = require('../models/good');
const {
    getGoods,
    getGoodById,
    deleteGoodById,
    createGood,
    updateGoodById
} = require('../controllers/good-controller')

const router = express.Router();

router.get('/goods', getGoods);
router.get('/goods/:id', getGoodById);
router.delete('/goods/:id', deleteGoodById);
router.post('/goods', createGood);
router.patch('/goods/:id', updateGoodById);

module.exports = router;