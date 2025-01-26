const bcrypt = require("bcrypt");

async function hashPassword(plainText) {
  try {
    const saltRounds = 10;
    const hash = await bcrypt.hash(plainText, saltRounds);
    return hash;
  } catch (error) {
    console.error("Error hashing password:", error);
  }
}

async function comparePassword(input_password, password_hash) {
  try {
    const compare = await bcrypt.compare(input_password, password_hash);
    return compare;
  } catch (err) {
    console.log("Error compare password:", err);
  }
}

module.exports = {
  hashPassword,
  comparePassword,
};
