const fs = require('fs');
const express = require('express');
const morgan = require('morgan');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// 1) MIDDLEWARES
app.use(morgan('dev'));

app.use(express.json());

app.use((req, res, next) => {
  console.log('Hey from the middleware 😂');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

const port = 3333;

///// USERS

// app.get(`/api/v1/tours`, getAlltours);
// app.get('/api/v1/tours/:id', getTour);
// app.post(`/api/v1/tours`, createNewTour);
// app.patch(`/api/v1/tours/:id`, updateTour);
// app.delete(`/api/v1/tours/:id`, deleteTour);

app.use(`/api/v1/tours`, tourRouter);
app.use(`/api/v1/users`, userRouter);

// 4) START SERVER
app.listen(port, () => {
  console.log(`Listening on ${port}...`);
});
