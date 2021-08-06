const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const helper = require('./test_helper');
const api = supertest(app);

const Blog = require('../models/blog');

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
});

test('all blogs are returned', async () => {
  const res = await api.get('/api/blogs');

  expect(res.body).toHaveLength(helper.initialBlogs.length);
});

test('a specific blog is within the returned blog', async () => {
  const res = await api.get('/api/blogs');

  const titles = res.body.map(r => r.title);
  expect(titles).toContain('second one');
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

  const blogsAtEnd = await helper.blogsInDb();
  expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1);

  const titles = blogsAtEnd.map(r => r.title);
  expect(titles).toContain('3rd one');
});

// WONT WORK SINCE THE FUNCTION IS FULLY COMPLETE YET
// test('note without content is not added', async () => {
//   const newBlog = {
//     author: 'another one',
//   };
//
//   await api.post('/api/blogs').send(newBlog).expect(400);
//
//   const res = await api.get('/api/blogs');
//
//   expect(res.body).toHaveLength(initialBlogs.length);
// });

afterAll(() => {
  mongoose.connection.close();
});
