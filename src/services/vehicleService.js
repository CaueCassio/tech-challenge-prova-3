const vehicleRepository = require('../repositories/vehicleRepository');

const vehicleService = {
  createVehicle: (data) => vehicleRepository.create(data),
  editVehicle: (id, data) => vehicleRepository.update(id, data),
  getAvailableVehicles: () => vehicleRepository.findAvailable(),
  getSoldVehicles: () => vehicleRepository.findSold(),
};

module.exports = vehicleService;
