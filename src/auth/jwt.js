const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const generateJwtToken = (payload) => {
  const token = jwt.sign(payload, secret, {
    expiresIn: '1h',
  });
  return token;
};

const decodeJwtToken = (token) => jwt.verify(token, secret);

module.exports = {
  generateJwtToken,
  decodeJwtToken,
};