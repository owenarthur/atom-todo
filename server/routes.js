const router = require('express').Router();
const controller = require('./controllers');

router.get('/todos/:id', controller.todos.get);
router.post('/todos', controller.todos.post);
router.delete('/todos/:id', controller.todos.delete);
// router.put('/todos/:id', controller.todos.put);

module.exports = router;
