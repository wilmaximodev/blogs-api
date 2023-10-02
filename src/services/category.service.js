const { Category } = require('../models');

const create = async (name) => {
  const category = await Category.create({ name });
  return { status: 201, data: category };
};

const findAll = async () => {
  const categories = await Category.findAll();
  return { status: 200, data: categories };
};

module.exports = {
  create,
  findAll,
};