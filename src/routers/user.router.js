const Router = require('express');
const { userController } = require('../controllers');
const validateUser = require('../middlewares/validadeUser');
const validateToken = require('../middlewares/validateToken');

const userRouter = Router();

userRouter.post('/', validateUser, userController.createUser);
userRouter.use(validateToken);
userRouter.get('/', userController.findAll);
userRouter.get('/:id', userController.findByPk);

module.exports = userRouter;