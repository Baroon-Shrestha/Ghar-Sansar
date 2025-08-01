require("dotenv").config();
const express = require("express");
const { database } = require("./Database/database");
const AuthRoutes = require("./Routes/AuthRoutes");
const ProductRoutes = require("./Routes/ProductRoutes");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api", AuthRoutes);
app.use("/api", ProductRoutes);

database();
module.exports = app;
