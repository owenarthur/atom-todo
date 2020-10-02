const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const router = require('./routes.js');

const app = express();
const port = 5000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/todos/', router);
app.use(express.static(path.join(__dirname, '/../public')));

app.listen(port, () => console.log(`listening on port ${port}`));
