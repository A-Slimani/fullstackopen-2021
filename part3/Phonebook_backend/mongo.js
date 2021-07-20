const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("incorrect argument");
  process.exit(1);
}

const password = process.argv[2];
const nameInput = process.argv[3];
const numberInput = process.argv[4];

const url = `mongodb+srv://aboud:${password}@cluster0.b0bjt.mongodb.net/Phonebook?retryWrites=true&w=majority`;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: nameInput,
  number: numberInput,
});

if (process.argv.length === 3) {
  Person.find({}).then(result => {
    result.forEach(person => {
      console.log(person);
    });
    mongoose.connection.close();
  });
} else {
  person.save().then(() => {
    console.log(`added ${nameInput} number ${numberInput} to phonebook`);
    mongoose.connection.close();
  });
}
