const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;
const colors = require('colors');
const krogerRouter = require('./routes/krogerRouter');
const authRouter = require('./routes/authRouter');
const cartRouter = require('./routes/cartRouter');
const session = require('express-session');
const krogerController = require('./controllers/krogerController');
const intervalTimeMinutes = 30; //intervalTimeMinutes * 1000 * 60

// setInterval(krogerController.getToken, 10000);
let callCount = 0;
console.log(callCount);
if (callCount === 0) {
  console.log('here');
  callCount++;
  console.log("AUTH TOKEN:",krogerController.getToken());
}
// let callCount = 0;
// console.log(callCount);
// if (callCount === 0) {
//   console.log('here');
//   callCount++;
//   krogerController.getToken();
// }

app.use(express.json());

// create a new session for users, that will be used when they attempt to authenticate
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

app.use('/api', krogerRouter);
// any login/register attempts will post to /auth, which will be handled by authRouter
app.use('/auth', authRouter);
// router that will handle logic related to adding items to cart associated with current authenticated user
app.use('/cart', cartRouter);

// ROUTE THAT WILL BE ACCESSED WHEN USER AUTHENTICATES
app.get('/home', (req, res) => {
  // if user has logged in, they will be redirected to this route, and there will be a session object with a logged in property and value true
  if (req.session.loggedin) {
    // user has authenticated
    res.send('Welcome back, ' + req.session.username + '!');
  }
  // catch users who try to access the /home endpoint manually
  else {
    res.send('You must log in before you can view this page');
  }
  res.end();
});

// catch-all route handler for any requests to an unknown route
app.use('*', (req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' }
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`.yellow);
});
