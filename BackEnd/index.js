const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

require("dotenv").config();
const UploadRoute = require("./Routes/UploadRoute.js");

const app = express();
const mongoURI = process.env.DATABASE;
const URL_FRONTEND =
  process.env.NODE_ENV === "production"
    ? "https://inakademia.com"
    : "https://inakademia.com";

app.use(express.json());
app.use(
  cors({
    origin:"https://inakademia.com",
    credentials: true,
  }),
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header("Content-Type", "application/json;charset=UTF-8");
  res.header("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "https://inakademia.com");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );
  next();
});

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "inakademia",
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

app.use("/api", require("./Routes/Router.js"));
app.use("/uploads", UploadRoute);

app.listen(process.env.PORT || 5001, () => {
  console.log(`App listening at port ${process.env.PORT || 5001}`);
});
