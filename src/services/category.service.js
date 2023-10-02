const { Category } = require('../models');

const create = async (name) => {
  const category = await Category.create({ name });
  return { status: 201, data: category };
};

module.exports = {
  create,
};