// Example: Get mobile wallet locations

const axios = require('axios');

let config = {
  method: 'get',
  url: 'https://mt-staging.dandelionpayments.com/Network/Countries/PK/MobileWallets/Locations?PageNumber=10&searchString=Airtel&PageSize=20',
  headers: {
    'ria-CallerCorrelationId': 'demo-correlation-id',
    'Host': 'mt-staging.dandelionpayments.com',
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
