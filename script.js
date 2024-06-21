const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const User = require("./Person");
mongoose.connect("mongodb://127.0.0.1:27017/mydb");

run();
async function run() {
  try {
    const user = await User.findOne({ name: "Mustapha" });
    console.log(user);
    await user.save();
    console.log(user);
    // user.sayHi();
  } catch (e) {
    console.log(e);
  }
}

// routes
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");

app.use("/users", userRoute);
app.use("/posts", postRoute);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`listening at ${PORT}`);
});
