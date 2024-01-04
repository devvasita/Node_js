// console.log("Hello Nodemon....");
// console.log("Welcoe to Node js ....");
// set-executaionpolicy unrestricted

// PACKAGE.JSON => package.json file is a main configuration file of the application

//  main file of the project ==> contain all information

//  information like ==> name , author , projectName , description , dependencies

const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "application/json" });

    const objData = { subject: "Nodejs", database: "MongoDb" };
    res.write(JSON.stringify(objData));

    res.end();
  })
  .listen(9000);
