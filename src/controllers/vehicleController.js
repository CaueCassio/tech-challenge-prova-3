const vehicleService = require('../services/vehicleService');

const vehicleController = {
  createVehicle: async (req, res) => {
    try {
      const vehicle = await vehicleService.createVehicle(req.body);
      res.status(201).json(vehicle);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  editVehicle: async (req, res) => {
    try {
      const vehicle = await vehicleService.editVehicle(req.params.id, req.body);
      res.status(200).json(vehicle);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  listAvailableVehicles: async (req, res) => {
    try {
      const vehicles = await vehicleService.getAvailableVehicles();
      res.status(200).json(vehicles);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  listSoldVehicles: async (req, res) => {
    try {
      const vehicles = await vehicleService.getSoldVehicles();
      res.status(200).json(vehicles);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = vehicleController;
