const jwt = require("jsonwebtoken");
const UsersToken = require("../Models/UsersToken");

const generateTokens = async (user) => {
  try {
    const payload = {
      _id: user.id,
      role: user.role,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    };

    const accessToken = jwt.sign(
      payload,
      process.env.ACCESS_TOKEN_PRIVATE_KEY,
      { expiresIn: "1d" },
    );

    const refreshToken = jwt.sign(
      payload,
      process.env.REFRESH_TOKEN_PRIVATE_KEY,
      { expiresIn: "30d" },
    );

    const userToken = await UsersToken.findOne({ userId: user._id });
    if (userToken) await userToken.deleteOne();

    await new UsersToken({ userId: user._id, token: refreshToken }).save();
    return Promise.resolve({ accessToken, refreshToken });
  } catch (err) {
    return Promise.reject(err);
  }
};

module.exports = generateTokens;
