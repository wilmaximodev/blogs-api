const { categoryService } = require('../services');

const create = async (req, res) => {
  const { name } = req.body;
  const category = await categoryService.create(name);
  return res.status(category.status).json(category.data);
};

const findAll = async (req, res) => {
  const categories = await categoryService.findAll();
  return res.status(categories.status).json(categories.data);
};

module.exports = {
  create,
  findAll,
};