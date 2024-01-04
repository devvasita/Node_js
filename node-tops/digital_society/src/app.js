require("dotenv").config();
const express = require("express");
const hbs = require("hbs");
const app = express();
const session = require("express-session");
const mongoose = require("mongoose");

app.use(
  session({
    secret: "ASDFGHJKL",
    resave: true,
    saveUninitialized: true,
  })
);


// Database connection
mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log(err));

// declare public folder as static
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/static", express.static("public"));

// configure hbs as a view  engine and declare views as views
app.set("view engine", "hbs");
app.set("views", "views");
hbs.registerPartials("views/partials");

// chairman route
const chairmanRoute = require("./routes/chairmanroute");
app.use("/chairman", chairmanRoute);

// configuration file importing and getting port variable
app.listen(process.env.PORT, () => {
  console.log(`server connected on port ${process.env.PORT}`);
});
