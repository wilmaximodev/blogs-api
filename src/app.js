const express = require('express');

const app = express();
const { loginRouter, userRouter } = require('./routers');

app.get('/', (_request, response) => {
  response.send();
});
app.use(express.json());
app.use('/login', loginRouter);
app.use('/user', userRouter);

module.exports = app;
