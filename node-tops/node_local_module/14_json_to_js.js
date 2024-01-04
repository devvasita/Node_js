const fs = require("fs");

const jsonData = fs.readFileSync("myJson.json");

const jsData = JSON.parse(jsonData);

console.log(jsData);
