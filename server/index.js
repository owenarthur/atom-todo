const path = require('path');
const bodyParser = require('body-parser');
const jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');
const cors = require('cors');

const express = require('express');
const controllers = require('./controllers/index.js');

const app = express();
const port = 5000;

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://atomtodo.us.auth0.com/.well-known/jwks.json',
  }),
  audience: 'https://atomtodo.us.auth0.com/api/v2/',
  issuer: 'https://atomtodo.us.auth0.com/',
  algorithms: ['RS256'],
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.options('*', cors());
app.use(express.static(path.join(__dirname, '/../public')));
app.get('/todos/:user', checkJwt, controllers.todos.get);
app.post('/todos/:user', checkJwt, controllers.todos.post);
app.put('/todos/:user/:id', checkJwt, controllers.todos.put);
app.delete('/todos/:user/:id', checkJwt, controllers.todos.delete);

app.listen(port, () => console.log(`listening on port ${port}`));
