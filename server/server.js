const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;
const colors = require('colors');
const krogerRouter = require('./routes/krogerRouter');
const krogerController = require('./controllers/krogerController');
const intervalTimeMinutes = 30; //intervalTimeMinutes * 1000 * 60
// setInterval(krogerController.getToken, 10000);
let callCount = 0;
console.log(callCount);
// if (callCount === 0) {
//   console.log('here');
//   callCount++;
//   krogerController.getToken();
// }

app.use(express.json());
app.use('/api', krogerRouter);

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
