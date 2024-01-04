const fs = require("fs");

fs.open("blankFile.txt", "w", function () {
  console.log("created");
});
