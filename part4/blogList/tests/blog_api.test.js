const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const api = supertest(app);
const Blog = require('../models/blog');
const initialBlog = [
  {
    title: 'first blog',
  },
];

describe('testing the server', () => {
  test('notes returned as json', async () => {
    await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });
  test('there are three blogs', async () => {
    const response = await api.get('/api/blogs');

    expect(response.body).toHaveLength(3);
  });
  test('the first blog title is named title', async () => {
    const response = await api.get('/api/blogs');

    expect(response.body[0].title).toBe('title');
  });
  test('a valid blog can be added', async () => {
    const newBlog = {
      title: 'test-title',
      author: 'aboud',
      url: 'testBlog.url',
      likes: 1,
    };

    await api
      .post('/api/notes')
      .send(newBlog)
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });

  const response = await api.get('/api/notes');

  const title = response.body.map(r => r.title);

  expect(response.body).toHaveLength(initialNotes.length + 1);
  expect(title).toContain('test-title');
});

// closes the mongoose database connection
afterAll(() => {
  mongoose.connection.close();
});
