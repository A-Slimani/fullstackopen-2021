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

blogRouter.get('/api/blogs/:id', async (req, res, next) => {
  // Blog.findById(req.params.id).then(blog => {
  //   blog ? res.json(blog) : res.status(404).end();
  // });
  try {
    const blog = await Blog.findById(req.params.id);
    res.json(blog);
  } catch (execption) {
    res.status(404).end()
  }
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
