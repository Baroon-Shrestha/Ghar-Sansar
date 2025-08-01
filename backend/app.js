require("dotenv").config();
const express = require("express");
const { database } = require("./Database/database");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

database();
module.exports = app;
