const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Users");
  console.log(req.query.name);
  // res.render("users/newuser", { firstName: "Planner" });
});

router.get("/user1", (req, res) => {
  res.send("User1");
});

router.post("/", (req, res) => {
  const isValid = false;
  if (isValid) {
    users.push({ firstName: req.body.firstName });
    res.redirect(`users/${users.length - 1}`);
  } else {
    console.log("Error");
    res.render("users/newuser", { firstName: req.body.firstName });
  }
  res.send("Hi");
});

router
  .route("/:id")
  .get((req, res) => {
    res.send(`Get User with ${req.params.id}`);
    console.log(req.user);
    console.log(users);
  })
  .post((req, res) => {
    res.send(`Create New User with ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update User with ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Update User with ${req.params.id}`);
  });

const users = [{ name: "Mustapha" }, { name: "Planner" }];
router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});

module.exports = router;
