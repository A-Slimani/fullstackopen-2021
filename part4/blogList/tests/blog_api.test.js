const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const helper = require('./test_helper');
const api = supertest(app);

const Blog = require('../models/blog');
const { application } = require('express');

// setting up the initial blogs
beforeEach(async () => {
  await Blog.deleteMany({});
  const blogObjects = helper.initialBlogs.map(blog => new Blog(blog));
  const promiseArray = blogObjects.map(blog => blog.save());
  await Promise.all(promiseArray);
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

// new set of tests
test('a single note can be viewed', async () => {
  const blogsAtStart = await helper.blogsInDb();

  const blogToView = blogsAtStart[0];

  const resultBlog = await api
    .get(`/api/blogs/${blogToView.id}`)
    .expect(200)
    .expect('Content-Type', /application\/json/);

  const processedBlogToView = JSON.parse(JSON.stringify(blogToView));

  expect(resultBlog.body).toEqual(processedBlogToView);
});

test('a single blog can be removed', async () => {
  let blogList = await helper.blogsInDb();

  await api.delete(`/api/blogs/${blogList[0].id}`).expect(204);
  blogList = await helper.blogsInDb();

  expect(blogList).toHaveLength(helper.initialBlogs.length - 1);

  // not sure why this is here?
  //  was it to ensure that a new blog will always be added?
  //  doesnt seem like it is needed... will leave it alone
  //  for now tho...

  // const newBlog = {
  //   title: 'another blog',
  //   author: 'aboud',
  //   url: 'aboudsblogs.org',
  //   likes: 98,
  // };

  // console.log(blogList);

  // await api.post('/api/blogs').send(newBlog);
});

test('all blog posts have an unique identifer', async () => {
  let blogList = await helper.blogsInDb();
  expect(blogList).toBeDefined();
});

describe('ADDING NEW BLOGS', () => {
  test('a valid blog can be added', async () => {
    const newBlog = await helper.newBlog();

    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(200)
      .expect('Content-Type', /application\/json/);

    const blogsAtEnd = await helper.blogsInDb();
    expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1);

    const titles = blogsAtEnd.map(b => b.title);
    expect(titles).toContain('new test blog');
  });

  test('creating a new blog without likes defaults to zero', async () => {
    let blogWithoutLikes = await helper.nonExistingLikes();

    await api
      .post('/api/blogs')
      .send(blogWithoutLikes)
      .expect(200)
      .expect('Content-Type', /application\/json/);

    const blogsAtEnd = await helper.blogsInDb();
    expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1);

    const titles = blogsAtEnd.map(b => b.title);
    expect(titles).toContain('No Likes');
  });

  test('creating a new blog without url will return a 400 bad request', async () => {
    let blogWithNoUrl = await helper.blogWithNoUrl();

    await api
      .post('/api/blogs')
      .send(blogWithNoUrl)
      .expect(400)
      .expect('Content-Type', /application\/json/);

    const blogsAtEnd = await helper.blogsInDb();
    expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length);
  });
});

afterAll(() => {
  mongoose.connection.close();
});
