const mongoose = require('mongoose');

mongoose.connect('mongodb://18.222.120.26:27017/todos', { useNewUrlParser: true, useUnifiedTopology: true })
  .catch((error) => console.log(error));

mongoose.connection.on('error', (err) => console.log(err));

const todoSchema = new mongoose.Schema({
  user: String,
  todoId: Number,
  title: String,
  description: String,
  status: { type: Number, min: 1, max: 3 },
  timing: { type: Number, min: 1, max: 3 },
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports.Todo = Todo;
