const { userService } = require('../services');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const user = await userService.createUser(displayName, email, password, image);
  return res.status(user.status).json(user.data);
};

const findAll = async (req, res) => {
  const users = await userService.findAll();
  return res.status(users.status).json(users.data);
};

const findByPk = async (req, res) => {
  const { id } = req.params;
  const user = await userService.findByPk(id);
  return res.status(user.status).json(user.data);
};

module.exports = {
  createUser,
  findAll,
  findByPk,
};