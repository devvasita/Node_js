const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>HELlo</h1>");
  //   const nnn = new Error("you will get error ;");
  //   next(nnn);
});

app.get("/about", (req, res) => {
  const name = req.query.name;
  const marks = req.query.marks;
  //   res.json({ name, marks });
  //   res.send(`name of student is ${name} and marks = ${marks}`);

  //   res.send(new throw Error)
});

app.get("/delete/:name/:id", (req, res) => {
  const id = req.params.id;
  const name = req.params.name;

  res.send(`Name of studnet is ${name} and id is ${id}`);
});

app.listen(9090, (err) => {
  if (err) throw err;
  console.log("Server Started");
});
