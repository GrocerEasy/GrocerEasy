const { response } = require('express');
const db = require('../db/dbModel');

const cartController = {};

cartController.update = (req, res, next) => {
  // expecting userID to be passed in on req.body.user
  const {food_name, food_id, food_price, food_size, quantity, cart_id} = req.body;
  const text = 'WITH f AS (INSERT INTO food (food_name, food_id, food_price, food_size, quantity) VALUES ($1, $2, $3, $4, $5) RETURNING id;) INSERT INTO cart_item (food_id, cart_id) SELECT f.id, $6 FROM f;'

  const values = [food_name, food_id, food_price, food_size, quantity, cart_id];
  db.query(text, values)
  .then((response) => {
    console.log('Added shopping cart!')
    next();
  })
  .catch((err) => {
    next({
      status: 404,
      message: {
        err: 'Error with request to adding shopping cart, please review input fields',
      },
    });
  });
  // const userId = req.body.user;
  // // expecting req.body.cart to be an object with an object for each item to add to user's cart
  // // each item object should have the food_name, food_id, food_price, and food_size as keys with corresponding values to add to the db
  // const cartObj = req.body.cart;
  // for (let key in cartObj) {
  //   // NEED TO FINISH THIS LOGIC LATER
  // }
}

cartController.getCart = (req, res, next) => {
  // grab userData from cookie sent by login route (that redirected to this route)
  const userData = JSON.parse(req.cookies['data']);
  // clear that cookie
  res.clearCookie('data', { httpOnly: true });
  // get user's cart info using the id stored in the cookie
  const uid = userData.user.id;
  db.query('SELECT f.*, ci.cart_id FROM cart c RIGHT OUTER JOIN cart_item ci ON ci.cart_id = c.id RIGHT OUTER JOIN food f ON f.id = ci.food_id WHERE c.user_id = $1;', [uid], (error, results) => {
    if (error) {
      // invoke express error handler
      return next(error);
    }
    else {
      userData.cart = results.rows;
      res.locals.loginResult = userData;
      return next();
    }
  });
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
