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

const newBlog = async () => {
  const blog = new Blog({
    title: 'new test blog',
    author: 'aboud',
    url: 'NEWTESTBLOg.org',
    likes: 100,
  });

  return blog.toJSON();
};

const nonExistingLikes = async () => {
  const blog = new Blog({
    title: 'No Likes',
    author: 'me',
    url: 'NoLikes.org',
  });

  return blog.toJSON();
};

const blogWithNoUrl = async () => {
  const blog = new Blog({
    title: "no URL",
    author: "KOS",
    likes: 22
  })

  return blog.toJSON();
}

const blogsInDb = async () => {
  const blogs = await Blog.find({});
  return blogs.map(blog => blog.toJSON());
};

module.exports = {
  initialBlogs,
  newBlog,
  nonExistingLikes,
  blogWithNoUrl,
  blogsInDb,
};
