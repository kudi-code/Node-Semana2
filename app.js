const express = require('express'); //Llamamos a express

//Routers
const { usersRouter } = require('./routes/users.routes'); //Importamos users
const { repairsRouter } = require('./routes/repairs.routes');

// Controllers
const { globalErrorHandler } = require('./controllers/errors.controller');

//utils
const { db } = require('./utils/database');

const app = express(); //guardamos en app el express

//Enable incoming JSON data
app.use(express.json());

//Endpoints
app.use('/api/v1/users', usersRouter); //llamando a users
app.use('/api/v1/repairs', repairsRouter)
//aquí definimos el endpoint

app.use('*', globalErrorHandler);

module.exports = {app}
