const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { signup, signin, requireSignin } = require("../controller/auth");

router.get("/signin", signin);
router.post("/signup", signup);

// router.post("/profile", requireSignin, (req, res) => {
//   res.status(200).json({
//     user: "Profile",
//   });
// });

module.exports = router;
