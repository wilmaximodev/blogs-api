const { User } = require('../models');
const jwt = require('../auth/jwt');

const login = async (email, password) => {
  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== password) {
    return {
      status: '400',
      data: { message: 'Invalid fields' },
    };
  }

  const { id } = user;
  const token = jwt.generateJwtToken({ id });

  return { status: 200, data: { token } };
};

module.exports = {
  login,
};