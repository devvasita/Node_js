const fs = require("fs");

fs.appendFile("file2.txt", "Hello", function () {
  console.log("added successfully");
});
