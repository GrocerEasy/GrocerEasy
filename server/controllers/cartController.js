const db = require('../db/dbModel');

const cartController = {};

cartController.update = (req, res, next) => {
  // expecting userID to be passed in on req.body.user
  const userId = req.body.user;
  // expecting req.body.cart to be an object with an object for each item to add to user's cart
  // each item object should have the food_name, food_id, food_price, and food_size as keys with corresponding values to add to the db
  const cartObj = req.body.cart;
  for (let key in cartObj) {
    // NEED TO FINISH THIS LOGIC LATER
  }
}

cartController.getCart = (req, res, next) => {
  console.log('hello')
}

// groceryController.addItem = (req, res, next) => {
//   // from res.locals.itemInfo:
//   // "name": String

//   // "upc" : Number
//   // "price": Number
//   // "size": String
//   // Object.values.
//   // create sql query string to insert row of data to db
//   const queryString =
//     'INSERT INTO grocery_data VALUES (default, $1, $2, $3, $4)';
//   // create var to hold parameterized vars from res.locals.itemInfo
//   const values = Object.values(res.locals.itemInfo);

//   db.query(queryString, values)
//     .then((item) => next())
//     .catch((error) => next(error));
// };

// groceryController.postInfo = (req, res, next) => {

//     console.log(res.locals.data);
//     //need to know the parameters
//     //If you only wanted to populate the name and price then specify it into parenthesis, otherwise it will do it automatically
//     // const query = `INSERT INTO grocery_data (id, food_name, food_id, food_price, food_size) VALUES(${})`
//     db.query
// }

module.exports = cartController;
