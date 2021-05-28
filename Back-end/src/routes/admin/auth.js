const express = require("express");
const router = express.Router();
const User = require("../../models/user");
const {
  signup,
  signin,
  requireSignin,
} = require("../../controller/admin/auth");

router.get("/admin/signin", signin);
router.post("/admin/signup", signup);

module.exports = router;
