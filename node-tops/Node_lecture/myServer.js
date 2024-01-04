var http = require("http");

http
  .createServer(function (req, res) {
    res.write("hello welcome to node js");

    res.end();
  })
  .listen(9000);
