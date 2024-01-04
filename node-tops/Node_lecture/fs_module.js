// FS module : file system module which is used to handle file

//  UTF-8 is a character encoding system > It lets you represnts characters as ASCII text

//  UTF : Undicee Transformation Format

//  we can perform below operations with fs moudle

//  read ,write , delete , update  , rename

const fs = require("fs");

fs.readFile("myFie.txt", "utf-8", function (err, data) {
  // first para for error
  if (err) throw err;
  // second for Data
  console.log(data);
});

// readfile takes a call back which calls response.send  ,

// fs.readfileSync ,  => it does not takee callback , so response.send callback will never get called
// ==>  so there is no response , and it will timeOut.
