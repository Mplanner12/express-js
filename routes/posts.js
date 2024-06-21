const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Post page");
});

router.get("/post1", (req, res) => {
  res.send("Post1");
});

module.exports = router;
