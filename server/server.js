const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');

app.use(cors());

// imports
const krogerRouter = require('./controllers/krogerController');
const groceryController = require('./controllers/groceryController');
const krogerController = require('./controllers/krogerController');

//check if it exists in database
// app.use('/addToGroceryList', )

// get request to check db for input food item
// newItemName
app.get('/addToList/:item', groceryController.checkItem, (req, res) => {
  return res.status(200).json(res.locals.food);
});

// app.get('/krogerapi/token', krogerController.getToken, (req, res) => {
//   return res.status(200).json(res.locals.tokenInfo);
// });

// get request to grab token and then fetch item data from kroger api
app.get(
  '/krogerapi/getItem/:item',
  krogerController.getToken,
  krogerController.getItem,
  groceryController.addItem,
  (req, res) => {
    return res.status(200).json(res.locals.itemInfo);
  }
);

// catch-all route handler for any requests to an unknown route
app.use('*', (req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);

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
  console.log(`Server listening on port: ${PORT}`);
});
