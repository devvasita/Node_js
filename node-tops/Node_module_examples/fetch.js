// const fetch = require("node-fetch");

import fetch from "node-fetch";

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => res.json())
  .then((res) => console.log(res));
