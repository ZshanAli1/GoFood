const express = require("express");
const router = express.Router();
const user = require("../models/User");

router.post("/createuser", async (req, res) => {
  try {
    await user.create({
      name: "zee",
      location: "basti",
      email: "zee@gmail",
      password: "12344",
      date: new Date(),
    });
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});

module.exports = router;
