// mongoose - mongdDB object modelling tool
const mongoose = require('mongoose');

// connection to the database
const mongoUrl = `mongodb+srv://aboud:gqq9KR3ZUzqscxd@cluster0.b0bjt.mongodb.net/BlogCollection?retryWrites=true&w=majority`;

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

// define the model
const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: String,
  url: { type: String, required: true },
  likes: { type: Number, default: 0 },
});

// modifying the id naming scheme??
blogSchema.set('toJSON', {
  transform: (document, obj) => {
    obj.id = obj._id.toString();
    delete obj._id;
    delete obj.__v;
  },
});

// accessing and exporting the model
module.exports = mongoose.model('Blog', blogSchema);
