const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

// imports
// const krogerRouter = require('./routes/krogerRouter', );
const groceryController = require('./controllers/groceryController');

//check if it exists in database
// app.use('/addToGroceryList', )

// get request to check db for input food item
app.get('/addToList', groceryController.getFood, (req,res)=>{
  return res.status(200).json(res.locals.food);
});

// get request to kroger api for food item data
app.get('/krogerapi', /* getapidata, postdatatodb */(req, res) => {
  return res.status(200).send('food not found in db');
});

// catch-all route handler for any requests to an unknown route
app.use('*', (req, res) => res.status(404).send('This is not the page you\'re looking for...'));

// global error handler
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });


app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
});