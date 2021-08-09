const Blog = require('../models/blog');

const initialBlogs = [
  {
    title: 'first blog',
    author: 'Abdullah',
    url: 'newBlog.org',
    likes: 22,
  },
  {
    title: 'second one',
    author: 'Slimani',
    url: 'nsecond.org',
    likes: 44,
  },
  {
    title: 'third one',
    author: 'Aboud',
    url: 'theThirdBlog.org',
    likes: 11,
  },
];

const nonExistingId = async () => {
  const blog = new Blog({
    title: 'toBeRemoved',
    author: 'me',
    url: 'something.org',
    likes: 30,
  });

  await blog.save();
  await blog.remove();

  return blog._id.toString();
};

const blogsInDb = async () => {
  const blogs = await Blog.find({});
  return blogs.map(blog => blog.toJSON());
};

module.exports = {
  initialBlogs,
  nonExistingId,
  blogsInDb,
};
