const express = require('express');
const moment = require('moment');
const path = require('path');
const query = require('../database/query.js');

const app = express();
const port = 3010;

app.use(express.static(path.join(__dirname, '/../public')));

app.get('/now', (req, res) => {
  query.getRsvps(req.query.id, res.send.bind(res));
});

// app.get('/main.js', (req, res) => {
//   res.sendFile('main.js', {
//     root: path.join(__dirname, '/../public')
//   });
// });

app.listen(port, () =>
  console.log(`Reservation Component listening on port ${port}!`)
);
