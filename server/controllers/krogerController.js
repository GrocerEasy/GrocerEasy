const krogerController = {};

// Declare an empty object
// Store token data in this object
const tokenData = {};

// Makes a POST request to the Kroger server
// Right now, only logs the response, and saves data to the tokenData object declared above but get back
// Response from Kroger is an object with three keys/properties
// access_token: String
// expires_in: 1800 *NOTE* in milliseconds (1800ms = 30 minutes)
// token_type: "bearer"

krogerController.getToken = (req, res, next) => {
  fetch('https://api.kroger.com/v1/connect/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic Z2V0Z3JvY2VyaWVzLTMxNTE3YTA4MDlmZTQ2NzAzNDJiOTI4Y2JmYjEwZWRkNjM4ODYwNTc5OTc5NDcwMDUzNjo5bUJnSWZZaWRyQjNoQ0VzNFdMTXV5VGROV3dOX1hoLW1LdjB4aEJH`,
    },
    body: 'grant_type=client_credentials&scope=product.compact',
  })
    .then((res) => res.json())
    .then((data) => {
      tokenData.accessToken = data.access_token;
      tokenData.expiresIn = data.expires_in;
      tokenData.tokenType = data.token_type;

      res.locals.tokenInfo = tokenData;
      // added a next statement
      return next();
    })
    .catch((error) => next(error));
};

// Test call to the Kroger server
// Hard coded the product name on line 43: filter.term=milk

//req params req body

//https://api.kroger.com/v1//products?filter.term=bread&filter.locationId=01400943&filter.limit=1
krogerController.getItem = (req, res, next) => {
  fetch(
    `https://api.kroger.com/v1/products?filter.term=milk&filter.locationId=01400943&filter.limit=1`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${tokenData.accessToken}`,
        'Access-Control-Allow-Origin': '*',
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      res.locals.itemInfo = data;
      return next();
    })
    .catch((err) => {
      return next({ error: 'error with krogerController.getItem' });
    });
};

module.exports = krogerController;

// // curl -X GET \
//   'https://api.kroger.com/v1/locations' \
//   -H 'Accept: application/json' \
//   -H 'Authorization: Bearer {{TOKEN}}'
// https://api.kroger.com/v1/locations/{locationId}
// https://api.kroger.com/v1/locations/{locationId}
