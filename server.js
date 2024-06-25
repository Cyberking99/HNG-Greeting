const express = require('express');
const app = express();

app.get('/api/hello', (req, res) => {
  const visitor_name = (req.query.visitor_name != undefined?req.query.visitor_name:"visitor");
  const client_ip = req.ip;
  // const location = ''; // todo: implement location lookup
  const greeting = `Hello, ${visitor_name}!`;

  res.json({
    client_ip: client_ip,
    // location,
    greeting
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});