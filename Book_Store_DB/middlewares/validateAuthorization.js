const jwt = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token)
    return res.status(401).json({ error: "Access denied. No token provided." });

  try {
    const decoded = jwt.verify(token, "jwtPrivateKey");
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(400).json({ error: "Invalid token." });
  }
};

const validateRoleAccess = (req, res, next) => {
  if (!req.user.isAdmin)
    return res.status(403).json({ error: "Access denied." });
  next();
};

module.exports = { validateToken, validateRoleAccess };
