// Example: Get delivery methods by destination country

const axios = require('axios');

let config = {
  method: 'get',
  url: 'https://mt-staging.dandelionpayments.com/Network/countries/UA/deliverymethods',
  headers: {
    'ria-CallerCorrelationId': 'demo-correlation-id',
    'Accept-Language': 'en-US',
    'Ocp-Apim-Subscription-Key': '<SUBSCRIPTION_KEY>',
    'Host': 'mt-staging.dandelionpayments.com',
    'Accept': 'application/json'
  }
};

axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
