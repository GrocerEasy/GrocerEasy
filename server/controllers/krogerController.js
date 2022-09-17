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

krogerController.getToken = () => {
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
      console.log(data);
      tokenData.accessToken = data.access_token;
      tokenData.expiresIn = data.expires_in;
      tokenData.tokenType = data.token_type;
    });
};

// Test call to the Kroger server
// Hard coded the access token for now, might get an error if expired

//req params req body

//https://api.kroger.com/v1//products?filter.term=bread&filter.locationId=01400943&filter.limit=1
const getMilk = () => {
  fetch(`https://api.kroger.com/v1/products?filter.term=${productwearelookingfor}&filter.locationId=01400943&filter.limit=1`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vYXBpLmtyb2dlci5jb20vdjEvLndlbGwta25vd24vandrcy5qc29uIiwia2lkIjoiWjRGZDNtc2tJSDg4aXJ0N0xCNWM2Zz09IiwidHlwIjoiSldUIn0.eyJhdWQiOiJnZXRncm9jZXJpZXMtMzE1MTdhMDgwOWZlNDY3MDM0MmI5MjhjYmZiMTBlZGQ2Mzg4NjA1Nzk5Nzk0NzAwNTM2IiwiZXhwIjoxNjYzNDQwOTYwLCJpYXQiOjE2NjM0MzkxNTUsImlzcyI6ImFwaS5rcm9nZXIuY29tIiwic3ViIjoiZDJkMWE1NWMtOGEzYi01ZGYzLTk4ZDMtZmQxNjY5YzA4MzEzIiwic2NvcGUiOiJwcm9kdWN0LmNvbXBhY3QiLCJhdXRoQXQiOjE2NjM0MzkxNjA2OTIzODM3NjMsImF6cCI6ImdldGdyb2Nlcmllcy0zMTUxN2EwODA5ZmU0NjcwMzQyYjkyOGNiZmIxMGVkZDYzODg2MDU3OTk3OTQ3MDA1MzYifQ.s74yvhUpomR3VYZUJS4uASSlf_xuwrbIo8J0eGI5PdRCp5cgw0c6pdFIXsGIHU0uq6R0lG8BnSO2SqCSci1GafWcxwWfvAOOMVtgJDlffq5ZdW7NqAx5Yhw2TJJkSiOWh9Z83gXFEMbQ6hDh7gkup5kBZIoQMzC8Q0cGt_cYkD1cGXUDESL-KXysixuADcjU9Q5U-sMbFo-AQdYvyQ4SH6JJgPMT1Ao3obO-JerxwH28tlITsgmLK6W9hHyEdQWtaeF42kolnw-L4YwjFRcYAwcG34csdyksQqjT7ORpmKkWFKDg2QrTxQiSfCRrDKtID4mtaYFM4_nXoaUpvVrXGQ',
      'Access-Control-Allow-Origin': '*',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};

// // curl -X GET \
//   'https://api.kroger.com/v1/locations' \
//   -H 'Accept: application/json' \
//   -H 'Authorization: Bearer {{TOKEN}}'
// https://api.kroger.com/v1/locations/{locationId}
// https://api.kroger.com/v1/locations/{locationId}