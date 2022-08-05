const express = require('express')
const mongoose = require('mongoose')

// CONFIGURATION
require('dotenv').config();
const app = express();
const port = process.env.PORT || 4000;

//IMPORTING ROUTES
const productRoute = require('./routes/product')

//CONNECTING TO DATABASE
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(
  MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log(`connected to mongo: ${MONGO_URI}`);
  }
);

//ROUTES
app.use('/api/products', productRoute)


app.listen(port, () => {
    console.log(`Running on port ${port}`)
})