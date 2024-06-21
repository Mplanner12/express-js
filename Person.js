const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: {
    type: Number,
    min: 1,
    max: 100,
    // validate: {
    //   validator: (v) => v % 2 === 0,
    //   message: (props) => `${props.value} is not an even number`,
    // },
  },
  createdAt: { type: Date, default: () => Date.now(), immutable: true },
  updatedAt: { type: Date, default: () => Date.now() },
  email: { type: String },
  bestfriend: { type: mongoose.SchemaTypes.ObjectId, ref: "Person" },
  hobbies: [String],
  address: {
    street: String,
    city: String,
  },
});

personSchema.methods.sayHi = function () {
  console.log(`Hello, my name is ${this.name}`);
};

personSchema.statics.findByName = function (name) {
  return this.find({ name: new RegExp(name, "i") });
};

personSchema.query.byName = function (name) {
  return this.where({ name: new RegExp(name, "i") });
};

personSchema.virtual("namedEmail").get(function () {
  return `${this.name} <${this.email}>`;
});

personSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
  // throw new Error("failed to save");
});

personSchema.post("save", function (doc, next) {
  doc.sayHi();
  next();
});

module.exports = mongoose.model("Person", personSchema);
