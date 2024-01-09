require("dotenv").config();
require("./DB/Connect");
const express = require("express");
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "hbs");
app.use(express.static("public"));

// product routes
const productRoute = require("./Routes/productRoutes");
app.use("/", productRoute);


app.listen(3001, (err) => {
  if (err) throw err;
  console.log("Server Started on port  3001");
});
