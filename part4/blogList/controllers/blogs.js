const blogRouter = require('express').Router();
const Blog = require('../models/blog');

blogRouter.get('/api/blogs', (req, res) => {
  Blog.find({}).then(blogs => {
    res.json(blogs);
  });
});

blogRouter.get('/', async (req, res) => {
  const blogs = await Blog.find({});
  res.json(blogs);
});

blogRouter.post('/api/blogs', async (req, res, next) => {
  const blog = new Blog(req.body);
  try {
    const savedBlog = await blog.save();
    res.json(savedBlog);
  } catch (exception) {
    next(exception);
  }
});

module.exports = blogRouter;
