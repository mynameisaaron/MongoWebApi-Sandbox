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

//Error middleware should be after the routes (routing methods)
//// err variable represents an err in the previous route
//===> This middleware will only be called if next is called in the previous method
//      ie .catch(next)
app.use((err,req,res,next)=>{
    res.status(422).send({error:err._message});
});



module.exports = app;