const db = require('../models/groceryModels');

// const krogerRouter = require('')

const groceryController = {};

groceryController.getFood = (req, res, next) => {
    const queryString = 'SELECT * FROM grocery_data';

    db.query(queryString)
    .then((data) => {
        if (data) {
            console.log(data);
            res.locals.food = data.rows;
            next();
        } else {
            //If we get other apis redirect to `req.body.location`
            console.log('food not found in db, redirecting to api');
            res.redirect('/krogerapi');
        }
    })
    .catch(err => {
        return next({log: ` err: ${JSON.stringify(err)}`, message: 'Error'})
    })
}

module.exports = groceryController;