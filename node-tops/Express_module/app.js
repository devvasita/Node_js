const express = require("express");

const app = express();
const PORT = 9000;

// app.get("/delete/:id", (req, res) => {
//   let idVal = req.params.id;
//   res.send(` Deleted ID = ${idVal}`);
// });

// app.get("/profile/:id/:firstName", (req, res) => {
//   let idVal = req.params.id;
//   let fnameVal = req.params.firstName;

//   res.send(`Profile Value of ${idVal} and name = ${fnameVal}`);
// });

app.get("/profile/:id/:firstName", (req, res) => {
  let idVal = req.params["id"];
  let fnameVal = req.params["firstName"];

  res.send(`Profile Value of ${idVal} and name = ${fnameVal}`);
});

// app.get("/about", (req, res) => {
//   let nameValue = req.query.name;
//   let marksValue = req.query.marks;

//   //   res.send(`name = ${nameValue}  marks = ${marksValue}`);
//   res.json({ nameValue, marksValue });
// });

// app.get("/", (req, res) => {
//   res.send("<h1>Welcome to express Js</h1>");
// });

// app.get("/about", (req, res) => {
//   res.send("ABout page");
// });
app.listen(PORT, (req) => {
  console.log("server started");
  console.log("req", req);
});
