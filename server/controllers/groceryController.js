const db = require('../models/groceryModels');

// const krogerRouter = require('')

const groceryController = {};

groceryController.getFood = (req, res, next) => {
    //We will need to modify this string based on a couple of parameters. What store we are requesting from is a major one.
    const queryString = 'SELECT * FROM grocery_data';
    const queryString2 = 'SELECT name,price, etc FROM grocery_data WHERE ${}'

    db.query(queryString)
    .then((data) => {
        if (data) {
            console.log(data);
            res.locals.food = data.rows;
            next();
        } else {
            //If we get other apis redirect to `req.body.location`
            console.log('food not found in db, redirecting to api');
            //we would have to redirect this to whatever api we are using.
            res.redirect('/krogerapi');
        }
    })
    .catch(err => {
        return next({log: ` err: ${JSON.stringify(err)}`, message: 'Error'})
    })
}

groceryController.postInfo = (req, res, next) => {

    console.log(res.locals.data);
    //need to know the parameters
    // const query = `INSERT INTO grocery_data (id, food_name, food_id, food_price, food_size) VALUES(${})`

}

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