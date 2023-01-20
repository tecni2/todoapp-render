const jwt = require("jsonwebtoken");
require("dotenv").config();

const authMiddleware = (req, res, next) => {
  let { authorization: token } = req.headers;
  token = token?.replace("Bearer ", "");
  if (token) {

    jwt.verify(token, process.env.JWT_SECRET, { algorithms: "HS512" }, (err, decoded) => {
      if (err) {
        res.status(400).json({
          error: "invalid token",
          message: "El token no es valido o ya expiro, envia uno correcto",
        });
      } else {
        console.log(decoded);
        next()
      }
    })
  } else {
    res.status(400).json({
      error: "no token provided",
      message: "No se esta enviando un token de autenticacion"
    })
  }
  // next();
}

module.exports = authMiddleware;