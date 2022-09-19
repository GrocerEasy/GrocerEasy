const db = require('../models/groceryModels');

// const krogerRouter = require('')

const groceryController = {};

groceryController.checkItem = (req, res, next) => {
  //We will need to modify this string based on a couple of parameters. What store we are requesting from is a major one.
  const queryString = 'SELECT * FROM grocery_data WHERE food_name = $1';
  const queryString2 = 'SELECT name, price, etc FROM grocery_data WHERE ${}';
  const values = [req.params.item];
  console.log(values[0]);
  console.log(typeof values[0]);

  db.query(queryString, values)
    .then((data) => {
    //   console.log(data.rows);
      if (data.rows.length) {
        // console.log(data);
        res.locals.food = data.rows;
        next();
      } else {
        //If we get other apis redirect to `req.body.location`
        console.log('food not found in db, redirecting to api');
        //we would have to redirect this to whatever api we are using.
        console.log(`THIS IS THE VALUES THING ${values[0]}`);
        res.redirect(`/krogerapi/getItem/${req.params.item}`);
        // getItem/:id
      }
    })
    .catch((err) => {
      next({ log: ` err: ${JSON.stringify(err)}`, message: 'Error' });
    });
};

groceryController.addItem = (req, res, next) => {
  // from res.locals.itemInfo:
  // "name": String
  
  // "upc" : Number
  // "price": Number
  // "size": String
  // Object.values.
  // create sql query string to insert row of data to db
  const queryString =
    'INSERT INTO grocery_data VALUES (default, $1, $2, $3, $4)';
  // create var to hold parameterized vars from res.locals.itemInfo
  const values = Object.values(res.locals.itemInfo);

  db.query(queryString, values)
    .then((item) => next())
    .catch((error) => next(error));
};

// groceryController.postInfo = (req, res, next) => {

//     console.log(res.locals.data);
//     //need to know the parameters
//     //If you only wanted to populate the name and price then specify it into parenthesis, otherwise it will do it automatically
//     // const query = `INSERT INTO grocery_data (id, food_name, food_id, food_price, food_size) VALUES(${})`
//     db.query
// }

/* 

starWarsController.addCharacter = (req, res, next) => {
  // write code here
  // const reqBody = [...req.body]
  // console.log(reqBody);
  // next();

  const charObj = req.body;
  delete charObj.species;
  delete charObj.homeworld;
  delete charObj.films;

  const values = Object.values(req.body);

  const addChar = `
  INSERT INTO people(name, gender, species_id, birth_year, eye_color, skin_color, hair_color, mass, height, homeworld_id)
  VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
  `;

  db.query(addChar, values).then((data) => next());
};
*/

module.exports = groceryController;
