// receives an array of blog posts as a parameter
// and always returns the value 1
const dummy = blogs => {
  return typeof blogs === 'object' ? 1 : 0;
};

const totalLikes = blogs => {
  return blogs.reduce((x, y) => x + y.likes, 0);
};

const favouriteBlog = blogs => {
  return blogs.reduce((x, y) => x.likes > y.likes ? x : y);
};

module.exports = {
  dummy,
  totalLikes,
  favouriteBlog,
};
