const express = require('express');
const app = express();
app.set('trust proxy', true)

app.get('/api/hello', (req, res) => {
  const visitor_name = (req.query.visitor_name != undefined?req.query.visitor_name:"visitor");
  const client_ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  axios.get('https://api.weatherapi.com/v1/current.json?q=146.70.99.187&key=b14c92e2cc6549da997194413240107')
    .then(response => {
      const location = response.location.name;
      const temperature = response.current.temp_c;
      const greeting = `Hello, ${visitor_name}!, the temperature is ${temperature} degrees Celcius in ${location}`;
      res.json({
        client_ip,
        location,
        greeting
      });
    });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});