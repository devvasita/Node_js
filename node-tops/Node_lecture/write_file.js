const fs = require("fs");

fs.writeFile("firstFile.txt", "Welcome to js and node", function () {
  console.log("File Created Successfully");
});
