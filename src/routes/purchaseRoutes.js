const express = require('express');
const router = express.Router();
const purchaseController = require('../controllers/purchaseController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, purchaseController.purchaseVehicle);

module.exports = router;
