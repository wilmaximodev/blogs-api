const Router = require('express');
const { postController } = require('../controllers');

const postRouter = Router();
const validateToken = require('../middlewares/validateToken');

postRouter.get('/', validateToken, postController.findAll);

module.exports = postRouter;