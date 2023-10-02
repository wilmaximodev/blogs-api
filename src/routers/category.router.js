const Router = require('express');
const { categoryController } = require('../controllers');
const validateToken = require('../middlewares/validateToken');
const validateCategory = require('../middlewares/validateCategory');

const categoryRouter = Router();

categoryRouter.use(validateToken);
categoryRouter.post('/', validateCategory, categoryController.create);
categoryRouter.get('/', categoryController.findAll);

module.exports = categoryRouter;