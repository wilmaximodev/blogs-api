const Router = require('express');
const { userController } = require('../controllers');
const validateUser = require('../middlewares/validadeUser');
const validateToken = require('../middlewares/validateToken');

const userRouter = Router();

userRouter.post('/', validateUser, userController.createUser);
userRouter.get('/', validateToken, userController.findAll);

module.exports = userRouter;