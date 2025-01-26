import axios from "axios";

export const URL_BACKEND =
  process.env.NODE_ENV === "production"
    ? "https://api.inakademia.com/api/"
    : "http://localhost:5001/api/";

export const URL_BE =
  process.env.NODE_ENV === "production"
    ? "https://api.inakademia.com"
    : "http://localhost:5001";

export default axios.create({
  baseURL: URL_BACKEND,
});
