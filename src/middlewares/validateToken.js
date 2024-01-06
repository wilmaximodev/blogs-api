const jwt = require('../auth/jwt');

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  
  const token = authorization.split(' ')[1];
  try {
    const user = jwt.decodeJwtToken(token);
    res.authorization = user;
    next();
  } catch (e) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validateToken;