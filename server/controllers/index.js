const models = require('../models');

module.exports = {

  todos: {

    get: (req, res) => {
      console.log('getting');
      const { user } = req.body;
      models.getTodos(user, (error, result) => {
        if (error) res.status(404).send();
        else res.status(200).send(result);
      });
    },

    post: (req, res) => {
      console.log('posting');
      const data = req.body;
      console.log(data);
      models.postTodo(data, (error, result) => {
        if (error) console.log('error at the post controller');
        else res.send(result);
      });
    },

    delete: (req, res) => {
      console.log('deleting');
      const data = { user: req.body.user, _id: req.body._id };
      models.deleteTodo(data, (error, result) => {
        if (error) console.log(error);
        else res.send(result);
      });
    },

    put: (req, res) => {
      console.log('putting');
      console.log(req.body);
      const params = { user: req.body.user, _id: req.body._id };
      const { status } = req.body;
      models.updateTodo(params, status, (error, result) => {
        if (error) {
          console.log(error);
        } else {
          res.send(result);
        }
      });
    },

  },
};
