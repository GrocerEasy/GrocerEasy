const express = require('express');
const router = express.Router();
const db = require('../db/dbModel');
const jwt = require('jsonwebtoken');
const config = require('config')

// Route is /auth



//Go to sql database. Collect items if there else go to api connection to collect data and save it.
router.post('/login', (req, res) => {
    // look for username and password info on body of request
    console.log(req.body)
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    // IF both parameters are truthy
    if (username && password) {
        db.query('SELECT * FROM user_info WHERE username = $1 AND password = $2 AND email = $3', [username, password, email], (error, results) => {
            // if the query to the DB does not find a match, output the error;
            if (error) res.send('An error has occurred in the login route')
            // otherwise, if account exists that matches input username and password
            if (results.rows.length) {
                // authenticate user
                const uid = results.rows[0].id;
                    
                // create JWT using user's credentials
                const token = jwt.sign({
                    id: uid
                  }, config.get('jwtSecret'), {
                    expiresIn: 864000
                });

                // ADD LOGIC FOR REDIRECTING ROUTE/SENDING JWT
                // send back id from user_info table that will be held in state and used to make future requests to cart router
                res.status(200).send({
                    user: {
                        id: uid,
                        username: username,
                        },
                    message: `Login was successful. Welcome back to GrocerEasy ${username}`,
                    accessToken: token,  
                });
            }
            else {
                res.status(400).send('Incorrect Username and/or Password and/or Email');
            }
            res.status(400).end();
        });
    }
    else {
        res.status(400).send('Please enter Username and Password');
    }
});


// Route that will be used to handle registration requests
router.post('/register', (req, res) => {
    // grab username, password, and email from front-end request
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    console.log('BODY', req.body)
    if (!username || !password || !email) {
        res.status(200).send('Please fill out all of the required data fields');
    }
    else {
        // error handling to prevent duplicate accounts from being registered
        db.query('SELECT * FROM user_info WHERE email = $1', [email], (error, results) => {
            if (error) res.status(400).send('An error occurred during the registration process. Please try again.');
            // if the user is trying to register with an email that already exists in the db, results will be truthy
            else if (results.rows.length) res.status(200).send('That email/username/password is already taken. Please try again using different credentials.');
            // otherwise, insert credentials into database and authenticate user
            else {
                db.query('INSERT INTO user_info (username, email, password) VALUES ($1, $2, $3) RETURNING id', [username, email, password], (error, results) => {
                    if (error) res.status(400).send('An error occurred during the registration process. Please try again.');
                    // otherwise, if there is no error
                    // save unique ID that is generated in table when adding a new user
                    const uid = results.rows[0].id;
                    
                    // create JWT using user's credentials
                    const token = jwt.sign({
                        id: uid
                      }, config.get('jwtSecret'), {
                        expiresIn: 864000
                      });

                    res.status(200).send({
                        user: {
                            id: uid,
                            username: username,
                          },
                        message: `Registration was successful. Welcome to GrocerEasy ${username}`,
                        accessToken: token,  
                        });
                    });
                };
            })
        }
    });

module.exports = router;