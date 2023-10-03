const { postService } = require('../services');

const findAll = async (_req, res) => {
  const posts = await postService.findAll();
  return res.status(posts.status).json(posts.data);
};

module.exports = {
  findAll,
};