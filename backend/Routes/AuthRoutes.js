const express = require("express");
const { test } = require("../Controller/AuthController");

const router = express.Router();

router.get("/test", test);

module.exports = router;
