const { postService } = require('../services');

const create = async (req, res) => {
  const { id } = req.headers.authorization;
  const { title, content, categoryIds } = req.body;
  const post = await postService.create(title, content, categoryIds, id);
  return res.status(post.status).json(post.data);
};

const findAll = async (_req, res) => {
  const posts = await postService.findAll();
  return res.status(posts.status).json(posts.data);
};

module.exports = {
  create,
  findAll,
};