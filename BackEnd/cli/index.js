const { Command } = require("commander");
const { default: inquirer } = require("inquirer");
const mongoose = require("mongoose");
const Users = require("../Models/UserSchema.js");
const { hashPassword } = require("../utils/hashing.js");
const program = new Command();
require("dotenv").config();

const connectionParams = {
  dbName: "inakademia",
};

mongoose.connect(process.env.DATABASE, connectionParams);

mongoose.connection.on("connected", () => {
  console.log("Connected to database sucessfully");

  program
    .name("Inakademia CLI")
    .description("CLI for Inakademia manager data.")
    .version("1.0.0");

  program
    .command("createadmin")
    .description("Create new admin")
    .action(async (str, options) => {
      try {
        const namaDepan = await inquirer.prompt([
          {
            type: "input",
            name: "namaDepan",
            message: "What's your first name?",
          },
        ]);
        const namaBelakang = await inquirer.prompt([
          {
            type: "input",
            name: "namaBelakang",
            message: "What's your last name?",
          },
        ]);
        const email = await inquirer.prompt([
          {
            type: "input",
            name: "email",
            message: "What's your email?",
          },
        ]);

        const password = await inquirer.prompt([
          {
            type: "password",
            name: "password",
            message: "Input password: ",
          },
        ]);

        const user = await Users.findOne({ email: email.email });
        if (user) console.log("User with given email is already exists");
        const password_hash = await hashPassword(password.password);
        const insertUser = await new Users({
          namaDepan: namaDepan.namaDepan,
          namaBelakang: namaBelakang.namaBelakang,
          email: email.email,
          password: password_hash,
          role: "admin",
        }).save();

        if (insertUser) {
          console.log("insertUser", insertUser);
          console.log("Admin successfully saved!: Ctrl + C to Exit");
          return;
        } else {
          console.log("Admin failed to save");
          return;
        }
      } catch (err) {
        console.log("Error: ", err);
        return;
      }
    });

  program.parse();
});

mongoose.connection.on("error", (err) => {
  console.log("Error while connecting to database :" + err);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongodb connection disconnected");
});
