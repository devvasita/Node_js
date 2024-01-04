const fs = require("fs");

fs.rename("firstFile.txt", "secondFile.txt", function () {
  console.log("renamed");
});
