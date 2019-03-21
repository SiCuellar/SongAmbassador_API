const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const enviornment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knexfile')(configuration);

app.use(bodyParser.json())