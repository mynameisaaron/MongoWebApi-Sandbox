const express = require('express');
const app = express();
const routes = require('./routes/routes');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/muber');



//Extreamly important to place this middleware above the rouse(app) method.
app.use(bodyParser.json());

routes(app);


module.exports = app;