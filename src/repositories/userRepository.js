const User = require('../models/User');

const userRepository = {
  create: (data) => User.create(data),
  findByEmail: (email) => User.findOne({ email }),
};

module.exports = userRepository;
