const Vehicle = require('../models/Vehicle');

const vehicleRepository = {
  create: (data) => Vehicle.create(data),
  update: (id, data) => Vehicle.findByIdAndUpdate(id, data, { new: true }),
  findById: (id) => Vehicle.findById(id),
  findAvailable: () => Vehicle.find({ status: 'available' }).sort({ price: 1 }),
  findSold: () => Vehicle.find({ status: 'sold' }).sort({ price: 1 }),
};

module.exports = vehicleRepository;
