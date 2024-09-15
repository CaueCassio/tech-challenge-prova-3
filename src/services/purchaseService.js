const vehicleRepository = require('../repositories/vehicleRepository');

const purchaseService = {
  purchaseVehicle: async (vehicleId, userId) => {
    const vehicle = await vehicleRepository.findById(vehicleId);
    if (!vehicle || vehicle.status === 'sold') {
      throw new Error('Veículo não disponível para compra');
    }
    vehicle.status = 'sold';
    vehicle.soldTo = userId; 
    return vehicle.save();
  },
};

module.exports = purchaseService;
