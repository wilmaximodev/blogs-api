const { loginService } = require('../services');

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await loginService.login(email, password);
  return res.status(user.status).json(user.data);
};

module.exports = {
  login,
};