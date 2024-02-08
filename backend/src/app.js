const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const notesRouter = require('./routers/notes')
const usersRouter = require('./routers/users')
//setings
app.set('port', process.env.PORT ||3051 ); 

//middelewares
app.use(cors());
const bodyParser = require("body-parser");
app.use(express.json());

//routes
app.use('/users', usersRouter)
app.use('/notes', notesRouter)

//exporto el modulo
module.exports = app;