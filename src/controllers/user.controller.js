const { userService } = require('../services');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const user = await userService.createUser(displayName, email, password, image);
  return res.status(user.status).json(user.data);
};

module.exports = {
  createUser,
};