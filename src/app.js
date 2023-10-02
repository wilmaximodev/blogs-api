const express = require('express');

const app = express();
const {
  loginRouter,
  userRouter,
  categoryRouter,
} = require('./routers');

app.get('/', (_request, response) => {
  response.send();
});
app.use(express.json());
app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/categories', categoryRouter);

module.exports = app;
