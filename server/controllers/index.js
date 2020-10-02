const models = require('../models');

module.exports = {

  todos: {

    get: (req, res) => {
      console.log('getting');
      models.getTodos(req, (error, result) => {
        if (error) res.status(404).send();
        else res.status(200).send(result);
      });
    },

    post: (req, res) => {
      const data = req.body;
      console.log(data)
      models.postTodo(data, (error, result) => {
        if (error) console.log('error at the post controller');
        else res.send(result);
      });
    },

    delete: (req, res) => {
      const data = { userId: req.body.userId, todoId: req.body.todoId };
      models.deleteTodo(data, (error, result) => {
        if (error) console.log(error);
        else res.send(result);
      });
    },

    // put: (req, res) => {
    //   models.updateTodo(name, (error, result) => {
    //     if (error) {
    //       console.log(error);
    //     } else {
    //       res.send(result);
    //     }
    //   });
    // },

  },
};
