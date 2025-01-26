const jwt = require("jsonwebtoken");
const UsersToken = require("../Models/UsersToken");

const verifyRefreshToken = (refreshToken) => {
  const privateKey = process.env.REFRESH_TOKEN_PRIVATE_KEY;

  return new Promise((resolve, reject) => {
    UsersToken.findOne({ token: refreshToken }).then((doc) => {
      if (!doc)
        return reject({ error: true, message: "Invalid refresh token" });

      jwt.verify(refreshToken, privateKey, (err, tokenDetails) => {
        if (err)
          return reject({ error: true, message: "Invalid refresh token" });

        resolve({
          tokenDetails,
          error: false,
          message: "Valid refresh token",
        });
      });
    });
  });
};

module.exports = verifyRefreshToken;
