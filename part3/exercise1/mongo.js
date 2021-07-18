const mongoose = require("mongoose");

require("dotenv").config();

// if (process.argv.length < 3) {
//   console.log("Please provide the password as an argument: node mongo.js <password>");
//   process.exit(1);
// }

// const password = process.argv[2];

const url = `mongodb+srv://aboud:${process.env.DB_PASS}@cluster0.b0bjt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
});

const Note = mongoose.model("Note", noteSchema);

const note = new Note({
  content: "Mongoose makes use of mongo easy",
  date: new Date(),
  important: true,
});

const note2 = new Note({
  content: "Callback-function suck",
  date: new Date(),
  important: true,
});

note.save().then(result => {
  console.log("note saved!");
  mongoose.connection.close();
});

note2.save().then(result => {
  console.log("note saved!");
  mongoose.connection.close();
});

// Note.find({important: true}).then(result => {
//   result.forEach(note => {
//     console.log(note);
//   });
//   mongoose.connection.close();
// });
