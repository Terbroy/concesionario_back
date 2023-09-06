const express = require('express');
const morgan = require('morgan');
const cors = require("cors");
const db = require('./utils/database');
const handleError = require("./middlewares/error");
const initModels = require("./models/initmodels.models");
require("dotenv").config();

const {
  usersRoutes, 
  authRoutes,
  vehiclesRoutes, 
  salesRoutes, 
  buyersRoutes, 
  priceRoutes} = require("./routes")



const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());  

initModels()


db.authenticate()
  .then(() => console.log('Autenticación exitosa'))
  .catch((err) => console.log(err))
  
db.sync({ force: false })
  .then(() => console.log('Conexión exitosa'))
  .catch((err) => console.log(err))

app.get('/', (req, res) => {
  res.status(200).json({
    status: "Respuesta exitosa",
    description: "Prueba esta API con SWAGGER en el siguiente ruta", 
    link: process.env.HOST,
  })
});
   
 
app.use('/api/v1', usersRoutes)
app.use('/api/v1', authRoutes)
app.use('/api/v1', vehiclesRoutes)
app.use('/api/v1', salesRoutes)
app.use('/api/v1', priceRoutes)
app.use('/api/v1', buyersRoutes)

  

app.use(handleError);

module.exports = app;