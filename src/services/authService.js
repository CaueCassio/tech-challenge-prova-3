const userRepository = require('../repositories/userRepository');
const jwt = require('jsonwebtoken');

const authService = {
  register: async (data) => {
    const existingUser = await userRepository.findByEmail(data.email);
    if (existingUser) {
      throw new Error('E-mail já está em uso');
    }
    const user = await userRepository.create(data);
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { user, token };
  },

  login: async (email, password) => {
    const user = await userRepository.findByEmail(email);
    if (!user || !(await user.comparePassword(password))) {
      throw new Error('Credenciais inválidas');
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { user, token };
  },
};

module.exports = authService;
