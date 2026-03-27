// Example: Get banks by destination country and product

const axios = require('axios');

let config = {
  method: 'get',
  url: 'https://mt-staging.dandelionpayments.com/Network/countries/US/products/116/banks?PageNumber=123&PageSize=20',
  headers: {
    'Accept-Language': 'en-US',
    'Ocp-Apim-Subscription-Key': '<SUBSCRIPTION_KEY>',
    'Authorization': 'Bearer <ACCESS_TOKEN>'
  }
};

axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
