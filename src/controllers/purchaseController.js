const purchaseService = require('../services/purchaseService');

const purchaseController = {
  purchaseVehicle: async (req, res) => {
    try {
      const vehicle = await purchaseService.purchaseVehicle(req.body.vehicleId, req.user.id);
      res.status(200).json({ message: 'Compra realizada com sucesso', vehicle });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};

module.exports = purchaseController;
