import jwt from "jsonwebtoken";

/*
=====================================
PROTECT ROUTES
=====================================
*/

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    /*
    =====================================
    CHECK TOKEN EXISTS
    =====================================
    */

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "No token provided"
      });
    }

    /*
    =====================================
    EXTRACT TOKEN
    =====================================
    */

    const token = authHeader.split(" ")[1];

    /*
    =====================================
    VERIFY TOKEN
    =====================================
    */

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    /*
    =====================================
    SAVE USER DATA
    =====================================
    */

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid token"
    });
  }
};

export default authMiddleware;