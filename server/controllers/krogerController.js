require('dotenv').config();
const krogerController = {};
// Declare an empty object
// Store token data in this object
const tokenData = {};
// import fetch from 'node-fetch';
const fetch = require('cross-fetch')

// Makes a POST request to the Kroger server
// Right now, only logs the response, and saves data to the tokenData object declared above but get back
// Response from Kroger is an object with three keys/properties
// access_token: String
// expires_in: 1800 *NOTE* in milliseconds (1800ms = 30 minutes)
// token_type: "bearer"

krogerController.getToken = (req, res) => {
  console.log(process.env.KROG_AUTH_CREDENTIALS)
  fetch('https://api.kroger.com/v1/connect/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${process.env.KROG_AUTH_CREDENTIALS}`
    },
    body: 'grant_type=client_credentials&scope=product.compact'
  })
    .then((res) => res.json())
    .then((data) => {
      tokenData.accessToken = data.access_token;
      tokenData.expiresIn = data.expires_in;
      tokenData.tokenType = data.token_type;
      setInterval(krogerController.getToken, tokenData.expiresIn * 60 * 100); //request new token when old token expires
     
      return tokenData;
    })
    .catch((error) => console.log(error));
};

// Test call to the Kroger server
// Hard coded the product name on line 43: filter.term=milk

//req params req body

//https://api.kroger.com/v1//products?filter.term=bread&filter.locationId=01400943&filter.limit=1
krogerController.getItem = (req, res, next) => {
  const { item, location } = req.params;
  console.log('req.params',item, location)
  //make sure front end sends a default location ID if user does not provide one
  // 01400943
  //FILTER LIMIT SET TO 10, CHANGE URL IF DIFFERENT AMOUNT IS DESIRED
  fetch(
    `https://api.kroger.com/v1/products?filter.term=${item}}&filter.locationId=${location}&filter.limit=8`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${tokenData.accessToken}`
        // 'Access-Control-Allow-Origin': '*',
      }
    }
  )
    .then((res) => res.json())
    .then((info) => {
      // narrow down the properties we want from the response object that Kroger gives us
      console.log('info', info);
      const itemsDetails = [];
      info.data.forEach((el) =>
        itemsDetails.push({
          food_name: el.description,
          upc: el.upc,
          food_price: el.items[0].price.regular,
          food_size: el.items[0].size
        })
      );
      //return array of first 5 objects matching our search criteria
      res.locals.itemInfo = itemsDetails;
      return next();
    })
    .catch((err) => {
      return next({ error: 'error with krogerController.getItem' });
    });
};

krogerController.getLocation = (req, res, next) => {
  const { zip_code } = req.params;
  //FILTER LIMIT SET TO 5, CHANGE URL IF DIFFERENT AMOUNT IS DESIRED
  let locationUrl = `https://api.kroger.com/v1/locations?filter.zipCode.near=${zip_code}&filter.limit=5`;
  // Location request body
  fetch(locationUrl, {
    method: 'GET',
    cache: 'no-cache',
    headers: {
      Authorization: `bearer ${tokenData.accessToken}`,
      'Content-Type': 'application/json; charset=utf-8'
    }
  })
    .then((response) => response.json())
    .then((info) => {
      console.log('getLocationInfo:', info);
      const locationInfo = [];
      info.data.forEach((store) =>
        locationInfo.push({
          name: store.name,
          locationId: store.locationId,
          geolocation: store.geolocation,
          chain: store.chain,
          hours: store.hours,
          address: store.address,
          phone: store.phone
        })
      );
      console.log('location info', locationInfo);
      res.locals.locationInfo = locationInfo;
      next();
    })
    .catch((err) => {
      return next({ error: 'error with krogerController.getLocation' });
    });
  // Return JSON object
  // console.log(locationResponse.json());
  // return ;
};
module.exports = krogerController;

// // curl -X GET \
//   'https://api.kroger.com/v1/locations' \
//   -H 'Accept: application/json' \
//   -H 'Authorization: Bearer {{TOKEN}}'
// https://api.kroger.com/v1/locations/{locationId}
// https://api.kroger.com/v1/locations/{locationId}
