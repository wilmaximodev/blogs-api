const Router = require('express');
const { userController } = require('../controllers');
const validateUser = require('../middlewares/validadeUser');

const userRouter = Router();

userRouter.post('/', validateUser, userController.createUser);

module.exports = userRouter;