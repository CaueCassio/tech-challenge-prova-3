const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');

router.post('/', vehicleController.createVehicle);
router.put('/:id', vehicleController.editVehicle);
router.get('/available', vehicleController.listAvailableVehicles);
router.get('/sold', vehicleController.listSoldVehicles);

module.exports = router;
