const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const api = supertest(app);
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
];

beforeEach(async () => {
  await Blog.deleteMany({});
  let blogObject = new Blog(initialBlogs[0]);
  await blogObject.save();
  blogObject = new Blog(initialBlogs[1]);
  await blogObject.save();
});

test('blogs returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/);
}, 100000);

test('all blogs are returned', async () => {
  const res = await api.get('/api/blogs');
  expect(res.body).toHaveLength(initialBlogs.length);
});

test('a specific blog is within the returned blog', async () => {
  const res = await api.get('/api/blogs');

  const contents = res.body.map(r => r.title);
  expect(contents).toContain('second one');
});

test('a valid blog can be added', async () => {
  const newBlog = {
    title: '3rd one',
    author: 'aboud',
    url: 'aboudsblogs.org',
    likes: 100,
  };

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(200)
    .expect('Content-Type', /application\/json/);

  const res = await api.get('/api/blogs');

  const contents = res.body.map(r => r.title);

  console.log(typeof initialBlogs.length)
  expect(res.title).toHaveLength(initialBlogs.length + 1);
  expect(contents).toContain('3rd one');
});

afterAll(() => {
  mongoose.connection.close();
});
