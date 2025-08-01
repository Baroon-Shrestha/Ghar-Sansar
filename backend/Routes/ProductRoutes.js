const express = require("express");
const { test2 } = require("../Controller/ProductController");

const router = express.Router();

router.get("/test2", test2);

module.exports = router;
