const express = require("express");
const hbs = require("hbs");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const r = require("./routes/main");

dotenv.config();

const port = process.env.PORT;
const DB_URL = process.env.DB_URL;
console.log(DB_URL);

app.use(express.urlencoded({ extended: false }));
app.use("/static", express.static("public"));
app.use("/", r);
app.use(express.static("public"));
app.set("view engine", "hbs");
app.set("views", "views");

mongoose.connect(DB_URL).then(() => {
  console.log("db connected");
});

hbs.registerPartials(path.join(__dirname, "views/partials"));

console.log(`Port no = ${process.env.PORT}`);

app.listen(port, () => {
  console.log("server started");
});

// Static Files in express :
// static file such as images , css files , and js files , use the express.static built-in middleware function in Express

// express.static(root , [options])

// app.use(express.static('public'))

// ======================= Partials

// Handlerbars allows for template reuse through partials.
// partials are normal Handlebars templates that may be called directly by other templates.
// Handlebars.registerPartial('myPartial',{{prefix}})
//route directory
// {{>myPartial}}
