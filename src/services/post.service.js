const { BlogPost, User, Category } = require('../models');

const findAll = async () => {
  const posts = await BlogPost.findAll({ include: [
    {
      model: User,
      as: 'user',
      attributes: {
        exclude: ['password'],
      },
    },
    {
      model: Category,
      as: 'categories',
      through: {
        attributes: [],
      },
    },
  ],
  });
  
  return { status: 200, data: posts };
};

module.exports = {
  findAll,
};