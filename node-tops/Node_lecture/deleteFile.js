const fs = require("fs");

fs.unlink("file2.txt", (err) => {
  if (err) throw err;
  console.log("delete");
});
