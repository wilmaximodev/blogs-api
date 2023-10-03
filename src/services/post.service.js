const { BlogPost, User, Category, PostCategory } = require('../models');

const create = async (title, content, categoryIds, id) => {
  const post = await BlogPost.create({
    title,
    content,
    userId: id,
    published: Date(),
    updated: Date(),
  });
  categoryIds
    .forEach(async (categoryId) => PostCategory.create({ postId: post.id, categoryId }));

  return { status: 201, data: post };
};

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
  create,
  findAll,
};