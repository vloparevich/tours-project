const fs = require('fs');
const express = require('express');
const app = express();
const port = 3333;

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

console.log(tours);

app.get(`/api/v1/tours`, (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: { tours },
  });
});

app.listen(port, () => {
  console.log(`Listening on ${port}...`);
});
