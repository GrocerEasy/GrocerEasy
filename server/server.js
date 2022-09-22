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
  console.log('AUTH TOKEN:', krogerController.getToken());
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
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

app.use('/api', krogerRouter);
// any login/register attempts will post to /auth, which will be handled by authRouter
app.use('/auth', authRouter);
// router that will handle logic related to adding items to cart associated with current authenticated user
app.use('/cart', cartRouter);

// handle requests for static files -> Not sure if we need this unless we bundle and try to enter production mode
// app.use('/assets', express.static(path.join(__dirname, 'build')));

// always serve index.html file so React router can handle routing on front-end
app.get('/*', (req, res) => {
  return res
    .status(200)
    .sendFile(path.resolve(__dirname, '../build/index.html'));
});

// catch-all route handler for any requests to an unknown route
app.use('*', (req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: err }
  };
  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`.yellow);
});
