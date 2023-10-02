const { categoryService } = require('../services');

const create = async (req, res) => {
  const { name } = req.body;
  const category = await categoryService.create(name);
  return res.status(category.status).json(category.data);
};

module.exports = {
  create,
};