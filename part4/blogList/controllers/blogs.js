const blogRouter = require('express').Router();
const Blog = require('../models/blog');

blogRouter.get('/api/blogs', async (req, res) => {
  const blogs = await Blog.find({});
  res.json(blogs);
});

blogRouter.get('/', async (req, res) => {
  const blogs = await Blog.find({});
  res.json(blogs);
});

blogRouter.get('/api/blogs/:id', async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  blog ? res.json(blog) : res.status(404).end();
});

blogRouter.post('/api/blogs', async (req, res, next) => {
  const blog = new Blog(req.body);
  if (blog.url === undefined || blog.title === undefined){
    return res.status(400).json({error : 'name and or url missing'})
  }
  const savedBlog = await blog.save().catch(error => next(error))
  res.json(savedBlog);
});

blogRouter.delete('/api/blogs/:id', async (req, res) => {
  const blog = await Blog.findByIdAndRemove(req.params.id);
  blog ? res.status(204).end() : res.status(404).end()
});

module.exports = blogRouter;
