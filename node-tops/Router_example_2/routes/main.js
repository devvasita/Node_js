const express = require("express");

const router = express.Router();
const path = require("path");
const hbs = require("hbs");

const employee = require("../models/Employees");
let count = 1;

hbs.registerHelper("checkAge", (age, option) => {
  if (age > 18) {
    return option.fn(this);
    // like return true
  } else {
    return option.inverse(this);
    // like return false
  }
});

hbs.registerHelper("upperCase", (name, option) => {
  return name.toUpperCase();
});

hbs.registerHelper("count", () => {
  return count++;
});

const data = {
  name: "dev",
  subject: "nodejs",
};

const subject = {
  languages: ["C", "C++", "Ruby", "Python", "Java"],
};

// router.get("/home", (req, res) => {
//   res.render("index");
// });

// router.get("/home", (req, res) => {
//   res.render("dashboard");
// });

router.post("/addEmployee", async (req, res) => {
  console.log("Btn clicked");
  console.log(req.body);
  console.log(req.body.name);

  const e = employee({
    name: req.body.name,
    subject: req.body.subject,
    city: req.body.city,
  });

  await e.save();
  res.redirect("home");
});

router.get("/home", async (req, res) => {
  count = 1;
  const data = await employee.find();
  console.log(data);
  res.render("dashboard", { data });
});

router.get("/edit/:id", async (req, res) => {
  // console.log("id :", id);
  const data = await employee.findById(req.params.id);

  res.render("edit", { data });
});

router.post("/update", async (req, res) => {
  console.log("---- update", req.body.name);

  const result = await employee.findByIdAndUpdate(req.body.id, req.body);
  console.log("---Result", result);
  res.redirect("home");
});

router.get("/delete/:id", async (req, res) => {
  console.log("---- delete", req.params.id);

  const result = await employee.findByIdAndDelete(req.params.id);
  console.log("---Result", result);
  res.redirect("/home");
});

// router.get("/age", (req, res) => {
//   res.render("index", { age: req.query.age });
// });

// router.get("/about", (req, res) => {
//   res.render("about", { data: subject });
// });

// router.get("/demo", (req, res) => {
//   res.render("demo");
// });

// router.get("/", (req, res) => {
//   // res.sendFile(path.join(__dirname, "../views/index.html"));
//   res.render("index", { key: data });
// });

// router.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "../views/about.html"));
// });

// router.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../views/404.html"));
// });

module.exports = router;
