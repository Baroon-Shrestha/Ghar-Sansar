const express = require("express");
const {
  test,
  adminLogin,
  adminMe,
  signOut,
} = require("../Controller/AuthController");

const router = express.Router();

router.get("/test", test);
router.post("/login", adminLogin);
router.get("/me", adminMe);
router.post("/signout", signOut);

module.exports = router;
