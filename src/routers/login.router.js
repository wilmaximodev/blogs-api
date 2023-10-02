const Router = require('express');
const { loginController } = require('../controllers');
const validateLogin = require('../middlewares/validateLogin');

const routerLogin = Router();

routerLogin.post('/', validateLogin, loginController.login);

module.exports = routerLogin;