const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  // console.log(req.headers.authorization);
  try {
    const token = req.headers.authorization.replace("Bearer ", "");
    // console.log("Token:" +token);
    const decoded = jwt.verify(token, "secret");
      req.userData = decoded  
      next()
  } catch (err) {
    return res.status(401).json({
      message: "Authentification Failed"
    });
  }
};
