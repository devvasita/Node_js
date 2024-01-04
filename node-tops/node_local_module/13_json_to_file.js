const fs = require("fs");

const jsData = {
  firstName: "Dev",
  lastName: "Vasita",
};

const saveData = function (jsData, filename) {
  const josnData = JSON.stringify(jsData);

  fs.writeFile(filename, josnData, (err) => {
    if (err) throw err;
    console.log("SuccessFully Data Added !!!!");
  });
};

saveData(jsData, "myJson.json");
