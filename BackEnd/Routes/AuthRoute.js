const express = require("express");

const {
  signInBodyValidation,
  refreshTokenBodyValidation,
} = require("../utils/validationSchema");
const Users = require("../Models/UserSchema");
const { comparePassword } = require("../utils/hashing");
const generateTokens = require("../utils/generateToken");
const verifyRefreshToken = require("../utils/verifyRefreshToken");
const router = express.Router();
const jwt = require("jsonwebtoken");
const UsersToken = require("../Models/UsersToken");
const Response = require("../utils/response");
const DOMAIN_COOKIES =
  process.env.NODE_ENV === "production" ? "inakademia.com" : "inakademia.com";

router.post("/login", async (req, res) => {
  try {
    const { error } = signInBodyValidation(req.body);
    if (error)
      return Response({ res: res, code: 400, data: error.details[0].message });

    const user = await Users.findOne({ email: req.body.email });
    if (!user)
      return Response({
        res: res,
        code: 400,
        detail_message: "Email atau pasword salah",
      });

    const verifyPassword = await comparePassword(
      req.body.password,
      user.password,
    );
    if (!verifyPassword)
      return Response({
        res: res,
        code: 400,
        detail_message: "Email atau pasword salah",
      });
    const { accessToken, refreshToken } = await generateTokens(user);
    const data_response = {
      user: {
        userId: user._id,
        namaDepan: user.namaDepan,
        namaBelakang: user.namaBelakang,
        role: user.role,
      },
      access_token: accessToken,
      refresh_token: refreshToken,
    };

    if (user.verified) {
      res.cookie("inakademia_user", JSON.stringify(data_response), {
        domain: DOMAIN_COOKIES,
        path: "/",
        secure: true,
      });

      return Response({
        res: res,
        code: 200,
        data: data_response,
        detail_message: "Logged in successfully",
      });
    } else {
      return Response({
        res: res,
        code: 400,
        detail_message:
          "Email kamu belum terverifikasi, silahkan untuk cek email kamu dan verifikasi.",
      });
    }
  } catch (err) {
    console.log(err);
    return Response({ res: res, code: 500 });
  }
});

router.post("/verify/email", async (req, res) => {
  try {
    const id_user = req.body.id;
    console.log("id_user", id_user);
    const user = await Users.findOne({
      _id: id_user,
    });

    if (!user) {
      return Response({
        res: res,
        code: 400,
        detail_message: "User tidak ditemukan",
      });
    }

    user.verified = true;
    user.save();
    return Response({
      res: res,
      code: 201,
      data: { verified: true },
    });
  } catch (err) {
    console.log(err);
    return Response({ res: res, code: 500 });
  }
});

router.post("/refreshToken", async (req, res) => {
  const { error } = refreshTokenBodyValidation(req.body);

  if (error)
    return Response({ res: res, code: 400, data: error.details[0].message });

  verifyRefreshToken(req.body.refresh_token)
    .then(({ tokenDetails }) => {
      console.log("tokenDetails", tokenDetails);
      const payload = {
        _id: tokenDetails.id,
        role: tokenDetails.role,
        namaDepan: tokenDetails.namaDepan,
        namaBelakang: tokenDetails.namaBelakang,
        email: tokenDetails.email,
      };

      const accessToken = jwt.sign(
        payload,
        process.env.ACCESS_TOKEN_PRIVATE_KEY,
        { expiresIn: "14m" },
      );
      return Response({
        res: res,
        code: 200,
        data: {
          access_token: accessToken,
        },
        detail_message: "Access token created succesfully",
      });
    })
    .catch((err) => {
      console.log(err);
      return Response({
        res: res,
        code: 400,
        data: err,
        detail_message: "Invalid refresh token",
      });
    });
});

router.post("/logout", async (req, res) => {
  try {
    const { error } = refreshTokenBodyValidation(req.body);
    if (error)
      return Response({ res: res, code: 400, data: error.details[0].message });

    const userToken = await UsersToken.findOne({
      token: req.body.refresh_token,
    });

    if (!userToken)
      return Response({
        res: res,
        code: 400,
        detail_message: "Refresh token not found",
      });

    await userToken.deleteOne();
    res.clearCookie("inakademia_user");
    return Response({
      res: res,
      code: 200,
      detail_message: "Loggout successfully",
    });
  } catch (err) {
    console.log(err);
    return Response({ res: res, code: 500, detail_message: err });
  }
});

module.exports = router;
