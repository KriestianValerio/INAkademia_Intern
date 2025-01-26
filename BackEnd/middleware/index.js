const Response = require("../utils/response");
const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  try {
    const token = req.header("Authorization").split(" ")[1];
    if (!token)
      return Response({
        res: res,
        code: 401,
        detail_message: "You Unauthorized to take action",
      });

    const tokenDetails = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_PRIVATE_KEY,
    );

    console.log("tokenDetails", tokenDetails);
    req.user = tokenDetails;
    next();
  } catch (err) {
    return Response({
      res: res,
      code: 403,
      data: "Access Denied: Invalid token",
    });
  }
};

const isAdmin = (req, res, next) => {
  try {
    console.log("req.user.role", req.user.role);
    if (req.user.role === "admin") {
      return next();
    }

    return Response({
      res: res,
      code: 401,
      detail_message: "You Unauthorized to take action",
    });
  } catch (err) {
    return Response({
      res: res,
      code: 401,
      detail_message: "You Unauthorized to take action",
    });
  }
};

const isStudent = (req, res, next) => {
  try {
    console.log("req.user.role", req.user.role);
    if (req.user.role === "student") {
      return next();
    }

    return Response({
      res: res,
      code: 401,
      detail_message: "You Unauthorized to take action",
    });
  } catch (err) {
    return Response({
      res: res,
      code: 401,
      detail_message: "You Unauthorized to take action",
    });
  }
};

const isTutor = (req, res, next) => {
  try {
    if (req.user.role === "tutor") {
      return next();
    }

    return Response({
      res: res,
      code: 401,
      detail_message: "You Unauthorized to take action",
    });
  } catch (err) {
    return Response({
      res: res,
      code: 401,
      detail_message: "You Unauthorized to take action",
    });
  }
};

module.exports = {
  authenticate,
  isAdmin,
  isStudent,
  isTutor,
};
