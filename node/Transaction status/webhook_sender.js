// Example: Webhook sender

const axios = require('axios');

const data = JSON.stringify({
  data: '<ENCRYPTED_PAYLOAD>'
});

const config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://example.com/remittances/webhooks/d',
  headers: {
    'correlationid': '90e66004-f1e3-4a4b-90b2-6d96938ef103',
    'Content-Type': 'application/json'
  },
  data: data
};

axios.request(config)
  .then((response) => {
    console.log('Status:', response.status);
    console.log('Headers:', JSON.stringify(response.headers, null, 2));
    console.log('Body:', response.data);
  })
  .catch((error) => {
    if (error.response) {
      console.log('Status:', error.response.status);
      console.log('Headers:', JSON.stringify(error.response.headers, null, 2));
      console.log('Body:', error.response.data);
    } else {
      console.log('Request failed:', error.message);
    }
  });