import jwt from "jsonwebtoken";

const config = process.env;

const verifyToken = (req, res, next) => {

const authToken = req.headers["authorization"];
console.log(authToken);
    if (!authToken) {
        return res.status(403).send("A token is required for authentication");
    }
    const token = authToken.split(' ')[1];


  
  try {
    console.log(config.jwtKey);
    const decoded = jwt.verify(token, config.jwtKey);
    console.log(decoded);
    req.user = decoded;

    console.log(req.user);
  } catch (err) {
    console.log(err);
    return res.status(401).send("Invalid Token");
  }
  return next();
};

export default verifyToken;