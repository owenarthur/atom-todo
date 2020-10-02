const { Todo } = require('../database');

module.exports = {
  getTodos: (data, callback) => {
    const email = data.params.id;
    Todo.find({ email })
      .then((result) => callback(null, result))
      .catch((err) => console.log(err));
  },

  postTodo: (data, callback) => {
    const todo = new Todo(data);
    todo.save()
      .then((result) => callback(null, result))
      .catch((err) => console.log(err));
  },

  deleteTodo: (data, callback) => {
    Todo.deleteOne({ userId: data.userId, todoId: data.todoId })
      .then((result) => callback(null, result))
      .catch((err) => console.log(err));
  },

  // updateTodo: (callback) => {

  // },

};
