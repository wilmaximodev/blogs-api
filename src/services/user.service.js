const { User } = require('../models');
const jwt = require('../auth/jwt');

const createUser = async (displayName, email, password, image) => {
  const user = await User.findOne({ where: { email } });
  if (user) return { status: 409, data: { message: 'User already registered' } };

  await User.create({ displayName, email, password, image });
  const created = await User.findOne({ where: { email } });
  const { id } = created;
  const token = jwt.generateJwtToken({ id });
  return { status: 201, data: { token } };
};

const findAll = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return { status: 200, data: users };
};

const findByPk = async (id) => {
  const user = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });
  if (!user) {
    return {
      status: 404,
      data: { message: 'User does not exist' },
    };
  }
  return { status: 200, data: user };
};

module.exports = {
  createUser,
  findAll,
  findByPk,
};