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
    Todo.deleteOne({ user: data.user, _id: data._id })
      .then((result) => callback(null, result))
      .catch((err) => console.log(err));
  },

  // updateTodo: (callback) => {

  // },

};
