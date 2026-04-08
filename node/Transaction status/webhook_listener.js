// Example: Webhook listener

const express = require('express');

const app = express();
app.use(express.json());

app.post('/remittances/webhooks/d', (req, res) => {
  const correlationId = req.headers['correlationid'];
  const payload = req.body;

  console.log('Webhook received');
  console.log('correlationid:', correlationId);
  console.log('payload:', JSON.stringify(payload, null, 2));

  res.status(200).send('ok');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Webhook listener is running on port ${PORT}`);
});